import React from 'react'

export const Color = ({name}) => {
    return (
        <div className="form-group">
            <input type="color" name="favcolor" value={name} className="form-control" />
        </div>
    );
};