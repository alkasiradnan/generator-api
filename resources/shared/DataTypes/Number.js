//import React from 'react'

module.exports = number = (name,entityName) => {
    return `<div className="form-group">
             <label> ${name} </label>
            <input type="number" min="1" name = "contact" className="form-control" value = {${entityName.toLowerCase()}['${name}']} placeholder="0123456789" onChange={this.onChange}/>
        </div>`;
};