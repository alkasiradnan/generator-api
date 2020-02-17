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
const textBox = require('../shared/DataTypes/TextBox')

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
                
    // if(item.type === 'Select'){
    //    return <SelectDropDown name = {item.name}></SelectDropDown>
    // }
     if(item.type === 'Text'){
        return  textBox(item.name)
    }
    // else if(item.type === 'CheckBox'){
    //     return  <CheckBox />
    // }
    // else if(item.type === 'RadioButton'){
    //     return  <RadioButton name = {item.name} />
    // }
    // else if(item.type === 'Color'){
    //     return  <Color name = {item.name} />
    // }
    // else if(item.type === 'Date'){
    //     return  <Date name = {item.name} />
    // }
    // else if(item.type === 'File'){
    //     return  <File />
    // }
    // else if(item.type === 'Image'){
    //     return  <Image name = {item.name} />
    // }
    // else if(item.type === 'Number'){
    //     return  <Number name = {item.name} />
    // }
    // else if(item.type === 'Tel'){
    //     return  <Tel name = {item.name} />
    // }
    // else if(item.type === 'URL'){
    //     return  <URL name = {item.name} />
    // }

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