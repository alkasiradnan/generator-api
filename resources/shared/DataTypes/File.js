//import React from 'react'

module.exports = file = () => {
    return `<div className="form-group">
           Select a file: <input type="file" name="myFile" className="form-control" onChange={this.onChange}/>
        </div>`;
};