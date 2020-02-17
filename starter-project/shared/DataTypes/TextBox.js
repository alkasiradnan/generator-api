import React from 'react'

export const TextBox = ({name}) => {
    return (
    <div className="form-group">
         <label> {name} </label>
        <input type="{item}" className="form-control" id="input{item}" />
    </div>);
};
