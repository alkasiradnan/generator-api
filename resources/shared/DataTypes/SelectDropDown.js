//import React from 'react'

module.exports = selectDropDown = (name,entityName) => {

  
    return `<div className="form-group">
             <label> ${name} </label>
            <select 
            value = {${entityName.toLowerCase()}['${name}']}   name = "select"
            id="inputState" className="form-control" onChange={this.onChange}>
                <option selected>Choose...</option>
                <option>...</option>
            </select>
        </div>`;
};