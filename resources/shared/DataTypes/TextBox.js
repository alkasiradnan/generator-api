// import React from 'react'

module.exports = textBox = (name,entityName) => {
    return `<div className="form-group">
         <label> ${name} </label>
        <input type="text" className="form-control" value = {${entityName.toLowerCase()}['${name}']}  placeholder = "Enter text.."/>
    </div>`;
};
