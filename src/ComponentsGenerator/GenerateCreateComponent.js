const {createComp,imageFunc} = require('../../resources/shared/DynamicForm')

module.exports = function GenerateCreateComponent(entityName, properties) {
    let result = createComp(properties,entityName);
    let imgContent = "";
    let imageMethod = properties.map((item) => {                  
      if(item.type.toLowerCase() === 'image'){
          imgContent = imageFunc();
      }
    })

    return `

    import React, { Component } from 'react';
    import DynamicForm from '../shared/DynamicForm';
    const employee = ({});
    const [${entityName.toString().toLowerCase()},set${entityName}] =useState({});
    export default class ${entityName}CreateComponent  extends Component{
     ${imgContent}

      
  render(){
  return (
      <div>
    ${result}
    </div>
  );
}
}
    `
}