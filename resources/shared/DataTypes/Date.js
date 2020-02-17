//import React from 'react'

module.exports =  date = ({name}) => {
    return `<div className="form-group">
            <label> ${name} </label>
            <input type="date" className="form-control" />
        </div>`;
};