//import React from 'react'

module.exports = selectDropDown = (name,entityName) => {

  
    return `<div className="form-group">
             <label> ${name} </label>
            <select 
            value = {${entityName}[${name}]}
            id="inputState" className="form-control">
                <option selected>Choose...</option>
                <option>...</option>
            </select>
        </div>`;
};