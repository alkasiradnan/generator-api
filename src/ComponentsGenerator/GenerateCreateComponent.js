const {createComp,imageFunc} = require('../../resources/shared/DynamicForm')

module.exports = function GenerateCreateComponent(entityName, properties) {
    let result = createComp(properties,entityName);
    let imgContent = "";
    let imageMethod = properties.map((item) => {                  
      if(item.type.toLowerCase() === 'image'){
          imgContent = imageFunc();
      }
    })
    let stateVal ="" , lVal = "";
     properties.map((item) => { 
      // item.type === 'Number' ? lVal = ": Number, " :lVal = ": '', " 
      stateVal = stateVal + item.name.toLowerCase() + ": '', "
      })

    return `

    import React, { Component } from 'react';

    import { connect } from "react-redux";
    import {add${entityName},edit${entityName},get${entityName}} from "../actions/${entityName.toLowerCase()}Action";
    import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
    const ${entityName.toLowerCase()} = ({});
    
   class ${entityName}CreateComponent  extends Component{
     ${imgContent}

    constructor(props)
    {
     super(props)
     this.state = {
         file: [null],
         ${entityName.toLowerCase()} :{
          ${stateVal} 
          // keyboard:true
        },
        backdrop:true
     }
    //  this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
    //  this.uploadFiles = this.uploadFiles.bind(this)
    }

     onChange = (e) => {
      this.setState({
        ${entityName.toLowerCase()}:{
          ...this.state.${entityName.toLowerCase()},
          [e.target.name]: e.target.type === "number"? parseInt(e.target.value) :e.target.value
        }
        });
    }
       
    onSubmit = () => {
      console.log(this.state.${entityName.toLowerCase()});
      this.props.onSubmit(this.state.${entityName.toLowerCase()});
    }

  render(){
  return (
      <div>
      <Modal isOpen={this.props.modal} toggle={this.props.clicked} backdrop={this.state.backdrop} >
      <ModalHeader>Add ${entityName}</ModalHeader>
      <ModalBody>
      ${result}
      </ModalBody>
    </Modal>
    </div>
  );
}
}
const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (${entityName.toLowerCase()}) => {
    const payload = add${entityName}(${entityName.toLowerCase()});
    dispatch({ type: 'ADD_${entityName.toUpperCase()}', payload })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(${entityName}CreateComponent);
    `
}