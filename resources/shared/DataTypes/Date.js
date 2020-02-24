//import React from 'react'

module.exports =  date = (name,entityName) => {
    return `<div className="form-group">
            <label> ${name} </label>
            <input type="date" className="form-control" name = "date" value = {${entityName.toLowerCase()}['${name}']} onChange={this.onChange}/>
        </div>`;
};