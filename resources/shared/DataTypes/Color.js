//import React from 'react'

module.exports = Color = (name) => {
    return `<div className="form-group">
            <input type="color" name="favcolor" className="form-control" />
            <label> ${name} </label>
        </div>`;
};