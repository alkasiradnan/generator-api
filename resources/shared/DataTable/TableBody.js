import React from 'react';

function TableBody({columns,items}) {
    return (
        <tbody>
            {items.map(item=>{
                return<tr>
                    {columns.map(a=><td> {item[a]}</td>)}
                </tr>
            })}
        </tbody>
    )
}

export default TableBody;