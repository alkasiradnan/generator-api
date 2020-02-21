//import React from 'react'

module.exports = checkBox = () => {
    return `<div className="form-group"> 
    <input className="form-check-input" type="checkbox" name = "check" id="gridCheck" onChange={this.onChange}/>    
    <label className="form-check-label" for="gridCheck"> Check me out </label>
    </div>`;
};