// import React from 'react'

module.exports = textBox = (name,entityName) => {
    return `<div className="form-group">
         <label> ${name} </label>
        <input type="text" name = "${name.toLowerCase()}" className="form-control" value = {${entityName.toLowerCase()}['${name.toLowerCase()}']}  placeholder = "Enter text.." onChange={this.onChange}/>
    </div>`;
};
