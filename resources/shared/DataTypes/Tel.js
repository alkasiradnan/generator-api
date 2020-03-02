//import React from 'react'

module.exports = tel = (name,entityName) => {
    return `<div className="form-group">
             <label> ${name} </label>
           <input type="tel" name = "telephone" className="form-control" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"  value = {${entityName.toLowerCase()}['${name.toLowerCase()}']} placeholder="123-45-678" onChange={this.onChange}/>
        </div>`;
};