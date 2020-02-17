//import React from 'react'

module.exports = Tel = (name) => {
    return `<div className="form-group">
             <label> ${name} </label>
           <input type="tel" name="phone" className="form-control" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
        </div>`;
};