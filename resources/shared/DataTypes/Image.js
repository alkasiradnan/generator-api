//import React from 'react'

image = (name,entityName) => {
    // return `<div className="form-group">
    //          <label> ${name} </label>
    //         <img src=${name} alt="Italian Trulli" className="form-control"  value = {${entityName.toLowerCase()}['${name}']} />
    //     </div>`;

   return  `<div className="form-group multi-preview">
                {(this.fileArray || []).map(url => (
                    <img src={URL.createObjectURL(url)} alt="..." />
                ))}
                </div>

                <div className="form-group">
                <input type="file" style={{visibility:'hidden'}} name = "img"   id="selectedFile"
                className="form-control" onChange={this.uploadMultipleFiles}  value = {${entityName.toLowerCase()}['${name}']} multiple onChange={this.onChange}/>

                <img src = {require('../images/img-upload.png')} id="upfile1"  alt = "Click" 
                style={{width:'40px',height:'40px'}} onClick = {this.imageClick}  />
                
                </div>
                <button type="button" className="btn btn-danger btn-block" onClick={this.uploadFiles} style={{width:'80px',height:'50px'}}>Upload</button>`;
};


imageMethods = () => {

   return  ` fileObj = [];
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
   } `;
};

module.exports = {image,imageMethods}