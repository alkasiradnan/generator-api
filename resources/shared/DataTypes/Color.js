//import React from 'react'

module.exports = color = (name) => {
    return `<div className="form-group">
            <input type="color" name="favcolor" className="form-control" />
            <label> ${name} </label>
        </div>`;
};