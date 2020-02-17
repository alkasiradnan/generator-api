import React from 'react'

export const Number = ({name}) => {
    return (
        <div className="form-group">
             <label> {name} </label>
            <input type="number" name={name} min="1" className="form-control" />
           
        </div>
    );
};