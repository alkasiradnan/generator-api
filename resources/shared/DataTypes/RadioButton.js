import React from 'react'

export const RadioButton = ({name}) => {
    return (
        <div className="form-group">
             <label> {name} </label>
            <input type="radio" value="option1" checked={true} className="form-control" />
            
        </div>
    );
};