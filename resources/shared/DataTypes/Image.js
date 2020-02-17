//import React from 'react'

module.exports = Image = (name) => {
    return `<div className="form-group">
             <label> ${name} </label>
            <img src=${name} alt="Italian Trulli" className="form-control" />
        </div>`;
};