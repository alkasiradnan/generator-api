//import React from 'react'

module.exports = image = (name) => {
    return `<div className="form-group">
             <label> ${name} </label>
            <img src=${name} alt="Italian Trulli" className="form-control" />
        </div>`;
};