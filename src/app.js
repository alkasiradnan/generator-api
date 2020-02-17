const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const GenerateListComponent = require('./ComponentsGenerator/GenerateListComponent');
const GenerateCreateComponent = require ('./ComponentsGenerator/GenerateCreateComponent');

const fs = require('fs')
const fsPromises = fs.promises;
var bodyParser = require('body-parser');
var fsExtra = require("fs-extra"); 

require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();
const folderName = '/starter-project'
const source = process.cwd() + '/resources'
const destination = process.cwd()+folderName

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({extended: 'false'}));
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
const ListcomponentPath = process.cwd()+folderName+'/'+entityName.toLowerCase()+'/'+entityName.toLowerCase()+'Listcomponent.js';
const CreatecomponentPath = process.cwd()+folderName+'/'+entityName.toLowerCase()+'/'+entityName.toLowerCase()+'Createcomponent.js';
const EditcomponentPath = process.cwd()+folderName+'/'+ entityName.toLowerCase()+'/'+entityName.toLowerCase()+'Editcomponent.js';
const CssPath = process.cwd()+folderName+'/'+ entityName.toLowerCase()+'/'+entityName.toLowerCase()+'.css';
//create a shared folder with dynamic table and forms


await createDir(entityName);
try {
  if (fs.existsSync(process.cwd()+'/starter-project/shared')) {
    console.log("Directory exists.")
  } else {
    await copyFile(source,destination)
    console.log("Directory does not exist.")
  }
} catch(e) {
  console.log("An error occurred.")
}
const content = GenerateListComponent(entityName);
await createFile(ListcomponentPath,content)

console.log(content);
const createContent = GenerateCreateComponent(entityName,entityProperties)
await createFile(CreatecomponentPath,createContent)
await createFile(EditcomponentPath,"EditcomponentPath")
await createFile(CssPath,"CssPath")
//get Data to write in files 

//create files 

return res.send({message:"created"})
});



const createDir = (entityName) => {
  console.log("process.cwd()",process.cwd())
  fs.mkdirSync(process.cwd()+folderName+'/'+ entityName.toLowerCase() , {recursive:true},(error)=>{

  })  
}

const copyFile = (source, destination) =>{
  console.log("source"+source)
  console.log("destination"+destination)
  fsExtra.copy(source, destination, (error) => {
    if (error){
        console.log('An error occured while copying the folder.')
        return console.error(error)
    }
    console.log('Copy completed!')
  }); 
}

const createFile = (filePath, fileContent) => {
  fs.writeFile(filePath, fileContent, (error) => {
      if(error)  {
        console.error("An error occurred :",error)
      }
      else{
        console.log("Your file is made !")
      }
  });
}




app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
