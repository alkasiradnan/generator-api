import React from 'react'

export const CheckBox = () => {
    return (
        <div className="form-group">
            <input className="form-check-input" type="checkbox" id="gridCheck" />
            <label className="form-check-label" for="gridCheck">
                Check me out
            </label>
        </div>
    );
};