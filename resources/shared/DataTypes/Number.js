//import React from 'react'

module.exports = number = (name,entityName) => {
    return `<div className="form-group">
             <label> ${name} </label>
            <input type="number" min="1" className="form-control" value = {${entityName.toLowerCase()}['${name}']} />
        </div>`;
};