// import React from 'react'

module.exports = TextBox = (name) => {
    return `<div className="form-group">
         <label> ${name} </label>
        <input type="text" className="form-control"  />
    </div>`;
};
