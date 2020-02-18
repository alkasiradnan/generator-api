module.exports = function GenerateListComponent(entityName,properties) {


 
console.log("properties in header",properties)
    return `

    import React, { useEffect, useState } from "react";
    import axios from 'axios';
    import { Table } from 'reactstrap';
    // import Edit from './Action/Edit';
    // import Delete from './Action/Delete ';
    import Pagination from '../shared/DataTable/Pagination';
    

    export default function ${entityName}ListComponent() {
      const [${entityName}s, set${entityName}s] = useState();
      const [startIndex, setStartIndex] = useState(0)
      const [pageSize, setPageSize] = useState(10);
    
      const [propertiesToShow, setPropertiesToShow] = useState()
      //render next 10 items when the currentPage changes
      useEffect(()=>{
        if(${entityName}s.length<=pageSize){
          setPropertiesToShow(${entityName}s)
        }
        else{
        const propertiesToSplice = [...${entityName}s];
        setPropertiesToShow(propertiesToSplice.splice(startIndex,pageSize))
        }
      
      },[startIndex,${entityName}s]);
      
      console.log(${entityName}s)

      
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
        <Pagination 
          setStartIndex={setStartIndex}
          pageSize={pageSize }
          count={${entityName}s.length}></Pagination>
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
  }).concat([`<td>
  <i class="fa fa-pencil-square-o fa-2x mr-4" data-toggle='tooltip' title='edit' aria-hidden="true"  onClick={(id)=>edit${entityName}(id)}></i>
  <i class="fa fa-trash-o fa-2x" data-toggle='tooltip' title='delete' aria-hidden="true" onClick={(id)=>delete${entityName}(id)}></i>
  </td>`]).join(' ')
  return `<tbody><tr> ${tbodyToRender} </tr></tbody>`
}

