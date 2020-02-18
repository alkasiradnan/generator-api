import React from 'react';

function TableHeader({columns}) {
    columns.map(column=>
        {column})
    return (
    `<thead><tr>{
         columns.map(a=><th key={a}>{a}</th>)
        }</tr></thead>`
    // <thead><tr><th>{column}</th></tr></thead>
    )
}

export default TableHeader;