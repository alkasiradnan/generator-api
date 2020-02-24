const selectDropDown = require('../shared/DataTypes/SelectDropDown')
const checkBox = require('../shared/DataTypes/CheckBox')
const radioButton = require('../shared/DataTypes/RadioButton')
const color = require('../shared/DataTypes/Color')
const date = require('../shared/DataTypes/Date')
const textBox = require('../shared/DataTypes/TextBox')
const file = require('../shared/DataTypes/File')
const {image,imageMethods} = require('../shared/DataTypes/Image')
const number = require('../shared/DataTypes/Number')
const tel = require('../shared/DataTypes/Tel')
const url = require('../shared/DataTypes/URL')

function createComp(items,entityName){
let content = items.map((item) => {          
                
    if(item.type.toLowerCase() === 'select'){
       return selectDropDown(item.name,entityName)
    }
     if(item.type.toLowerCase() === 'text'){
        return  textBox(item.name,entityName)
    }
    else if(item.type.toLowerCase() === 'checkBox'){
        return  checkBox()
    }
    else if(item.type.toLowerCase() === 'radioButton'){
        return  radioButton(item.name,entityName)
    }
    else if(item.type.toLowerCase() === 'color'){
        return  color(item.name,entityName)
    }
    else if(item.type.toLowerCase() === 'date'){
        return  date(item.name,entityName)
    }
    else if(item.type.toLowerCase() === 'file'){
        return  file()
    }
    else if(item.type.toLowerCase() === 'image'){

        return  image(item.name,entityName)
    }
    else if(item.type.toLowerCase() === 'number'){
        return  number(item.name,entityName)
    }
    else if(item.type.toLowerCase() === 'tel'){
        return  tel(item.name,entityName)
    }
    else if(item.type.toLowerCase() === 'url'){
        return  url(item.name,entityName)
    }

    })
        return `
        <form>
            ${content.join("\n")}
            <div class="form">
                <button type="submit" class="btn btn-primary" onClick={this.onSubmit}>Sign in</button>
            </div>
            </form>`
        
    }

function imageFunc(){
        return imageMethods();
    }

    module.exports = {createComp,imageFunc}