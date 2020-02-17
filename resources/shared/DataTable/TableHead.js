import React from 'react';

function TableHeader({columns}) {
    return (
    <thead><tr>{
         columns.map(a=><th key={a}>{a}</th>)
        }</tr></thead>
    )
}

export default TableHeader;