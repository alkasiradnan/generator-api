module.exports = function GenerateListComponent(entityName,properties) {

  
 
console.log("properties in header",properties)
    return `

    import React, { useEffect, useState } from "react";
    import axios from 'axios';
    import { Table } from 'reactstrap';
    // import Edit from './Action/Edit';
    // import Delete from './Action/Delete ';


    export default function ${entityName}ListComponent() {
      const [${entityName}s, set${entityName}s] = useState();
      const fetch${entityName}s = async () => {
        const ${entityName}Response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (${entityName}Response && ${entityName}Response.data) {
          set${entityName}s(${entityName}Response.data);
        }
      };
      useEffect(() => {
        fetch${entityName}s();
        return () => {};
      }, []);

      const editEmployee=(id)=>{

      }
      const deleteEmployee=(id)=>{
    
      }
      
      return <div>
          <h1> ${entityName} List</h1>
          <hr></hr>
         {${entityName}s && ${entityName}s.length && 
         <Table striped>
         
         ${GenerateTableHeader(entityName,properties)}
         ${GenerateTableBody(entityName,properties)}
         
         </Table>
        }
      </div>;
    }
       
    `
}




 function GenerateTableHeader(entityName,properties) {
console.log(properties)

  const theadToRender = properties.map(propName=>{
    return `<th>${propName.name}</th>`
  }).concat([`<th>Action</th>`]).join(' ')
  console.log("theadToRender",theadToRender)
  return `<thead><tr>${theadToRender}</tr></thead>`
}

function GenerateTableBody(entityName,properties){
  
  const tbodyToRender=properties.map(propName=>{
    return `<td>${propName.name}</td>`
  }).concat([`<td><button  onClick={(id)=>edit${entityName}(id)}>Edit</button><button onClick={(id)=>delete${entityName}(id)}>Delete</button></td>`]).join(' ')
  return `<tbody><tr> ${tbodyToRender} </tr></tbody>`
}

