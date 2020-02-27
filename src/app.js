const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const GenerateListComponent = require('./ComponentsGenerator/GenerateListComponent');
const GenerateCreateComponent = require('./ComponentsGenerator/GenerateCreateComponent');
const {GenerateActionsIndex,GenerateActions,GenerateConstantFile} = require('./ActionsGenerator/GenerateAction');
const {GenerateReducers} = require('./ReducersGenerator/GenerateReducer');
// const {GenerateReducerIndex} = require('./ReducerGenerator/GenerateReducer');
const {GenerateSaga,GenerateSagaIndex} = require('./SagaGenerator/GenerateSaga');

const fs = require('fs')
const fsPromises = fs.promises;
var bodyParser = require('body-parser');
var fsExtra = require("fs-extra");

require('dotenv').config();

const middlewares = require('./middlewares');
// const api = require('./api');

const app = express();
const folderName = '/starter-project'
const source = process.cwd() + '/resources'
const destination = process.cwd() + folderName

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: 'false' }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄'
  });
});


app.post('/process', async (req, res) => {
  console.log(req.body)
  const entityName = req.body.Name;
  const entityProperties = req.body.Properties;
  console.log(entityName)
  console.log(entityProperties);
  const ListcomponentPath = process.cwd() + folderName + '/' + entityName.toLowerCase() + '/' + entityName.toLowerCase() + 'ListComponent.js';
  const CreatecomponentPath = process.cwd() + folderName + '/' + entityName.toLowerCase() + '/' + entityName.toLowerCase() + 'CreateComponent.js';
  const EditcomponentPath = process.cwd() + folderName + '/' + entityName.toLowerCase() + '/' + entityName.toLowerCase() + 'EditComponent.js';
  const CssPath = process.cwd() + folderName + '/' + entityName.toLowerCase() + '/' + entityName.toLowerCase() + '.css';
  const actionIndexPath = process.cwd() + folderName + '/actions'+ '/' +'index.js';
  const actionCreatorPath = process.cwd() + folderName + '/actions'+ '/' +entityName.toLowerCase()+'Action.js';
  const constantsPath = process.cwd() + folderName + '/actions'+ '/' +'actionTypes.js';
  const reducerCreatorPath = process.cwd() + folderName + '/reducers'+ '/' +entityName.toLowerCase()+'Reducer.js';
  const reducerIndexPath = process.cwd() + folderName + '/reducers'+ '/' +'index.js';
  const sagaCreatorPath = process.cwd() + folderName + '/sagas'+ '/' +entityName.toLowerCase()+'Saga.js';
  const sagaIndexPath = process.cwd() + folderName + '/sagas'+ '/' +'watchApp'+entityName+'.js';
  //create a shared folder with dynamic table and forms


  await createDir(entityName);
  try {
    if (fs.existsSync(process.cwd() + '/starter-project/shared')) {
      console.log("Directory exists.")
    } else {
      await copyFile(source, destination)
      console.log("Directory does not exist.")
    }
  } catch (e) {
    console.log("An error occurred.")
  }
  const content = GenerateListComponent(entityName, entityProperties);
  await createFile(ListcomponentPath, content)

  console.log(content);
  const createContent = GenerateCreateComponent(entityName, entityProperties, false)
  const editContent = GenerateCreateComponent(entityName, entityProperties, true)
  await createFile(CreatecomponentPath, createContent)
  await createFile(EditcomponentPath, editContent)
  await createFile(CssPath, "CssPath")
  const actionNames = entityName.toLowerCase()+"Action"
  console.log("actio",actionNames)
  console.log(GenerateActionsIndex(actionNames))
  const actionIndexContent = GenerateActionsIndex(actionNames,entityName);
  console.log(actionIndexContent)
  await appendFile(actionIndexPath, actionIndexContent)
  const constantActionTypes = GenerateConstantFile(entityName);
  await appendFile(constantsPath, constantActionTypes)
  const actionCreater = GenerateActions(entityName);
  await createFile(actionCreatorPath,actionCreater)
  // const reducerIndexContent = GenerateReducerIndex(entityName)
  // await appendFile(reducerIndexPath,reducerIndexContent)
  const reducerCreator = GenerateReducers(entityName);
  await createFile(reducerCreatorPath,reducerCreator)
  const sagaIndexContent = GenerateSagaIndex(entityName)
  await createFile(sagaIndexPath,sagaIndexContent)
  const sagaCreator = GenerateSaga(entityName);
  await createFile(sagaCreatorPath,sagaCreator)
  //get Data to write in files 

  //create files 

  return res.send({ message: "created" })
});



const createDir = (entityName) => {
  console.log("process.cwd()", process.cwd())
  fs.mkdirSync(process.cwd() + folderName + '/' + entityName.toLowerCase(), { recursive: true }, (error) => {

  })
  fs.mkdirSync(process.cwd() + folderName + '/actions', { recursive: true }, (error) => {

  })
  fs.mkdirSync(process.cwd() + folderName + '/reducers', { recursive: true }, (error) => {

  })
  fs.mkdirSync(process.cwd() + folderName + '/sagas', { recursive: true }, (error) => {

  })
  //fs.mkdirSync(process.cwd() + folderName + '/constants')
}

const copyFile = (source, destination) => {
  console.log("source" + source)
  console.log("destination" + destination)
  fsExtra.copy(source, destination, (error) => {
    if (error) {
      console.log('An error occured while copying the folder.')
      return console.error(error)
    }
    console.log('Copy completed!')
  });
}

const createFile = (filePath, fileContent) => {
  console.log(filePath);
  
  fs.writeFile(filePath, fileContent, (error) => {
    if (error) {
      console.error("An error occurred :", error)
    }
    else {
      console.log("Your file is made !")
    }
  });
}

const appendFile = (filePath,fileContent) =>{
  try {
    fs.appendFileSync(filePath, fileContent);
    console.log('The "data to append" was appended to file!');
  } catch (err) {
    /* Handle the error */
  }
}




// app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
