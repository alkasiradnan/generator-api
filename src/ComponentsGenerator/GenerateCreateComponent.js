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

    import { connect } from "react-redux";
    import addEmployee from "./actions/employeeAction";
    // import editEmployee from "./actions/employeeAction";
    // import getEmployee from "./actions/employeeAction";

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
      this.props.onSubmit(this.state.employee);
    }

  render(){
  return (
      <div>
    ${result}
    </div>
  );
}
}
const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (employee) => {
    const payload = addEmployee.add${entityName}(employee);
    dispatch({ type: 'ADD_${entityName.toUpperCase()}', payload })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(${entityName});
    `
}