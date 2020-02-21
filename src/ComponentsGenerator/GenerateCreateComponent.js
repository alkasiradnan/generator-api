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
    
    export default class ${entityName}CreateComponent  extends Component{
     ${imgContent}

    constructor(props)
    {
     super(props)
     this.state = {
         file: [null],
         employee :{
          user:'',
          telephone:'',
          date:'',
          select :'',
          check:'',
          color:'',
          myFile:'',
          img:'',
          contact:'',
          radio:'',
          urlPath:''
        }
     }
    //  this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
    //  this.uploadFiles = this.uploadFiles.bind(this)
    }

     onChange = (e) => {
      this.setState({
         employee:{
          ...this.state.employee,
          [e.target.name]: e.target.value
        }
        });
    }
       
    onSubmit = () => {
      console.log(this.state.employee);
      
    }

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