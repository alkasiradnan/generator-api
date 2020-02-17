const selectDropDown = require('../shared/DataTypes/SelectDropDown')
const checkBox = require('../shared/DataTypes/CheckBox')
const radioButton = require('../shared/DataTypes/RadioButton')
const color = require('../shared/DataTypes/Color')
const date = require('../shared/DataTypes/Date')
const textBox = require('../shared/DataTypes/TextBox')
const file = require('../shared/DataTypes/File')
const image = require('../shared/DataTypes/Image')
const number = require('../shared/DataTypes/Number')
const tel = require('../shared/DataTypes/Tel')
const url = require('../shared/DataTypes/URL')

module.exports = function createComp(items){
let content = items.map((item) => {          
                
    if(item.type.toLowerCase() === 'select'){
       return selectDropDown(item.name)
    }
     if(item.type.toLowerCase() === 'text'){
        return  textBox(item.name)
    }
    else if(item.type.toLowerCase() === 'checkBox'){
        return  checkBox()
    }
    else if(item.type.toLowerCase() === 'radioButton'){
        return  radioButton(item.name)
    }
    else if(item.type.toLowerCase() === 'color'){
        return  color(item.name)
    }
    else if(item.type.toLowerCase() === 'date'){
        return  date(item.name)
    }
    else if(item.type.toLowerCase() === 'file'){
        return  file()
    }
    else if(item.type.toLowerCase() === 'image'){
        return  image(item.name)
    }
    else if(item.type.toLowerCase() === 'number'){
        return  number(item.name)
    }
    else if(item.type.toLowerCase() === 'tel'){
        return  tel(item.name)
    }
    else if(item.type.toLowerCase() === 'url'){
        return  url(item.name)
    }

    })
        return `
        <form>
            ${content.join("\n")}
            <div class="form">
                <button type="submit" class="btn btn-primary">Sign in</button>
            </div>
            </form>`
        
    }