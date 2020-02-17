import React from 'react'

export const URL = ({name}) => {
    return (
        <div className="form-group">
             <label> {name} </label>
            <input type="url" name={name} className="form-control" />
           
        </div>
    );
};