// import React from 'react'

module.exports = textBox = (name,entityName) => {
    return `<div className="form-group">
         <label> ${name} </label>
        <input type="text" name = "user" className="form-control" value = {${entityName.toLowerCase()}['${name}']}  placeholder = "Enter text.." onChange={this.onChange}/>
    </div>`;
};
