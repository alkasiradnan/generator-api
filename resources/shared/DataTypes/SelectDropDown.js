//import React from 'react'

module.exports = SelectDropDown = (name) => {
    return `<div className="form-group">
             <label> ${name} </label>
            <select id="inputState" className="form-control">
                <option selected>Choose...</option>
                <option>...</option>
            </select>
        </div>`;
};