//import React from 'react'

module.exports = url = (name,entityName) => {
    return `<div className="form-group">
             <label> ${name} </label>
            <input type="url" name = "url" className="form-control" value = {${entityName.toLowerCase()}['${name.toLowerCase()}']} placeholder="http://google.com/" onChange={this.onChange}/>
        </div>`;
};