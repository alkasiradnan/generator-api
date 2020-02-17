import React from 'react'

export const Date = ({name}) => {
    return (
        <div className="form-group">
              <label> {name} </label>
            <input type="date"  name={name} className="form-control" />
          
        </div>
    );
};