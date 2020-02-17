// import React,{ Component } from "react";
// import './DataForm.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { TextBox } from "./DataTypes/TextBox";
// import {SelectDropDown} from "./DataTypes/SelectDropDown";
// import {CheckBox} from "./DataTypes/CheckBox";
// import {RadioButton} from "./DataTypes/RadioButton";
// import {Color} from "./DataTypes/Color";
// import {Date} from "./DataTypes/Date";
// import {File} from "./DataTypes/File";
// import {Image} from "./DataTypes/Image";
// import {Number} from "./DataTypes/Number";
// import {Tel} from "./DataTypes/Tel";
// import {URL} from "./DataTypes/URL";
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

// class DynamicForm extends Component
// {
//     constructor(props)
//     {
//         super(props)
//     }

//     render()
//     {

module.exports = function createComp(items){
let content = items.map((item) => {          
                
    if(item.type === 'Select'){
       return selectDropDown(item.name)
    }
     if(item.type === 'Text'){
        return  textBox(item.name)
    }
    else if(item.type === 'CheckBox'){
        return  checkBox()
    }
    else if(item.type === 'RadioButton'){
        return  radioButton(item.name)
    }
    else if(item.type === 'Color'){
        return  color(item.name)
    }
    else if(item.type === 'Date'){
        return  date(item.name)
    }
    else if(item.type === 'File'){
        return  file()
    }
    else if(item.type === 'Image'){
        return  image(item.name)
    }
    else if(item.type === 'Number'){
        return  number(item.name)
    }
    else if(item.type === 'Tel'){
        return  tel(item.name)
    }
    else if(item.type === 'URL'){
        return  url(item.name)
    }

    })

     //   var items = this.props.items;
        return `
        <form>
            ${content.join("\n")}
            <div class="form">
                <button type="submit" class="btn btn-primary">Sign in</button>
            </div>
            </form>`
        
    }