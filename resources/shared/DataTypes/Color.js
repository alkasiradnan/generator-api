//import React from 'react'

module.exports = color = (name,entityName) => {
    return `<div className="form-group">
            <input type="color" name="color" className="form-control"  value = {${entityName.toLowerCase()}['${name.toLowerCase()}']} onChange={this.onChange}/>
            <label> ${name} </label>
        </div>`;
};