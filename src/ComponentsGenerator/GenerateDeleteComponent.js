module.exports = function GenerateDeleteComponent(entityName) {
       return `
        import React, { Component } from 'react';
        import { Modal, ModalHeader, ModalBody} from 'reactstrap';
        import {delete${entityName}} from "../actions/${entityName.toLowerCase()}Action";
        import { connect } from "react-redux";

        class ${entityName}DeleteComponent  extends Component{
            
            constructor(props)
            {
            super(props)
            this.state = {
                file: [null],
                ${entityName.toLowerCase()} :{
                    ...this.props.data
                // keyboard:true
                },
                backdrop:true
            } 
            }
            onSubmit = () => {
                console.log("in delete onsubmit..",this.state.${entityName.toLowerCase()});
                this.props.onSubmit(this.state.${entityName.toLowerCase()});
            }
            onClose() {
                
            }
            render(){
                
                return (
                
                    <Modal isOpen={this.props.modal} toggle={this.props.clicked} backdrop={this.state.backdrop} className="w-75">
                    {/* <ModalHeader>Delete ${entityName}</ModalHeader> */}
                    <ModalBody className="d-flex flex-column align-items-center ">
                    <form>  
                        <p>Are you sure you want to delete?</p>
                        <div><button type="submit" class="btn btn-danger mr-2" onClick={this.onSubmit} style={{width:'80px',height:'50px'}}>Yes</button>
                        <button type="submit" className="btn btn-danger mr-2" onClick={this.onClose} style={{width:'80px',height:'50px'}}>No</button></div>
                    </form>
                    </ModalBody>
                    </Modal>
                
                )
            }
        }
        const mapStateToProps = state => ({
            ...state
        });
        
        const mapDispatchToProps = dispatch => ({
            onSubmit: (${entityName.toLowerCase()}) => {
            const payload = delete${entityName}(${entityName.toLowerCase()});
            dispatch({ type: 'DELETE_${entityName.toUpperCase()}', payload })
            }
        });
        
        export default connect(mapStateToProps, mapDispatchToProps)(${entityName}DeleteComponent);`
}