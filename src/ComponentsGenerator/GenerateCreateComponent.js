const createComp = require('../../resources/shared/DynamicForm')

module.exports = function GenerateCreateComponent(entityName, properties) {
    console.log("proper", properties)
    let result = createComp(properties,entityName);
    console.log("result", result)
    return `

    import React from 'react';
    import DynamicForm from '../shared/DynamicForm';

    export default function ${entityName}CreateComponent({}) {
      const [${entityName.toString().toLowerCase()},set${entityName}] =useState({})
  var properties = ${JSON.stringify(properties)};
  return (
      <div>
    ${result}
    </div>
  );
}

    `
}