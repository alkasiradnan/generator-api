//import React from 'react'

module.exports = radioButton = (name,entityName) => {
    return `<div className="form-group">
             <label> ${name} </label>
            <input type="radio" name = "radio" value="option1" checked={true} className="form-control" value = {${entityName.toLowerCase()}['${name}']}  onChange={this.onChange}/>
        </div>`;
};