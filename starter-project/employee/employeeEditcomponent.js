

    import React, { Component } from 'react';
    import DynamicForm from '../shared/DynamicForm';
    const employee = ({});
    
    export default class EmployeeCreateComponent  extends Component{
      fileObj = [];
   fileArray = [];
   
   uploadMultipleFiles = (e) =>   {
     if(e.target.value.length !== 0){
     this.fileObj.push(e.target.files)
     
     for (let i = 0; i < this.fileObj.length; i++) {
     
         const url = this.fileObj[i][0];
         if(!this.fileArray.some(a=>a === url))
         this.fileArray.push(url)          
       
     }
     this.setState({ file: this.fileArray })
   }
   }

   imageClick = () => {
     document.getElementById('selectedFile').click();
   } 

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
    
        <form>
            <div className="form-group">
         <label> User </label>
        <input type="text" name = "user" className="form-control" value = {employee['User']}  placeholder = "Enter text.." onChange={this.onChange}/>
    </div>
<div className="form-group">
             <label> Telphone </label>
           <input type="tel" name = "telephone" className="form-control" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"  value = {employee['Telphone']} placeholder="123-45-678" onChange={this.onChange}/>
        </div>
<div className="form-group">
            <label> Date </label>
            <input type="date" className="form-control" name = "date" value = {employee['Date']} onChange={this.onChange}/>
        </div>
<div className="form-group">
             <label> select me </label>
            <select 
            value = {employee['select me']}   name = "select"
            id="inputState" className="form-control" onChange={this.onChange}>
                <option selected>Choose...</option>
                <option>...</option>
            </select>
        </div>

<div className="form-group">
            <input type="color" name="color" className="form-control"  value = {employee['blue']} onChange={this.onChange}/>
            <label> blue </label>
        </div>
<div className="form-group">
           Select a file: <input type="file" name="myFile" className="form-control" onChange={this.onChange}/>
        </div>
<div className="form-group multi-preview">
                {(this.fileArray || []).map(url => (
                    <img src={URL.createObjectURL(url)} alt="..." />
                ))}
                </div>

                <div className="form-group">
                <input type="file" style={{visibility:'hidden'}} name = "image"   id="selectedFile"
                className="form-control" onChange={this.uploadMultipleFiles}  value = {employee['img']} multiple onChange={this.onChange}/>

                <label>Click me </label><img src = {require('./images/img-upload.png')} id="upfile1"  alt = "Click" 
                style={{width:'40px',height:'40px'}} onClick = {this.imageClick}  />
                
                </div>
                <button type="button" className="btn btn-danger btn-block" onClick={this.uploadFiles}>Upload</button>
<div className="form-group">
             <label> Contact </label>
            <input type="number" min="1" name = "contact" className="form-control" value = {employee['Contact']} placeholder="0123456789" onChange={this.onChange}/>
        </div>

<div className="form-group">
             <label> url </label>
            <input type="url" name = "urlPath" className="form-control" value = {employee['url']} placeholder="http://google.com/" onChange={this.onChange}/>
        </div>
            <div class="form">
                <button type="submit" class="btn btn-primary" onClick={this.onSubmit}>Sign in</button>
            </div>
            </form>
    </div>
  );
}
}
    