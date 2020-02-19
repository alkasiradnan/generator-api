//import React from 'react'

module.exports = url = (name,entityName) => {
    return `<div className="form-group">
             <label> ${name} </label>
            <input type="url" className="form-control" value = {${entityName.toLowerCase()}['${name}']} placeholder="http://google.com/"/>
        </div>`;
};
14