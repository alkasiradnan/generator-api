//import React from 'react'

module.exports = image = (name,entityName) => {
    return `<div className="form-group">
             <label> ${name} </label>
            <img src=${name} alt="Italian Trulli" className="form-control"  value = {${entityName.toLowerCase()}['${name}']} />
        </div>`;
};