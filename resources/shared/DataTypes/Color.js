//import React from 'react'

module.exports = color = (name,entityName) => {
    return `<div className="form-group">
            <input type="color" name="favcolor" className="form-control"  value = {${entityName.toLowerCase()}['${name}']}/>
            <label> ${name} </label>
        </div>`;
};