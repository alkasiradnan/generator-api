module.exports = function GenerateListComponent(entityName,properties) {
  

 
console.log("properties in header",properties)
    return `

    import React, { useEffect, useState } from "react";
    import axios from 'axios';
    import { Table } from 'reactstrap';
    import GenerateCreateComponent from './GenerateCreateComponent';
    import Pagination from '../shared/DataTable/Pagination';
    

    export default function ${entityName}ListComponent() {
      const [${entityName}s, set${entityName}s] = useState([
        {User:'Deeraj',Telphone:'7304541558',Date:'23/05/2005'},
        {User:'Raju',Telphone:'7304541558',Date:'23/05/2005'},
        {User:'Neeraj',Telphone:'7304541558',Date:'23/05/2005'}
      ]);
      const [${entityName}Copys, set${entityName}Copys] = useState([
        {User:'Deeraj',Telphone:'7304541558',Date:'23/05/2005'},
        {User:'Raju',Telphone:'7304541558',Date:'23/05/2005'},
        {User:'Neeraj',Telphone:'7304541558',Date:'23/05/2005'}
      ]);
      const [startIndex, setStartIndex] = useState(0)
      const [pageSize, setPageSize] = useState(10);
      const [propertiesToShow, setPropertiesToShow] = useState();
      const [search,setSearch]=useState('');
      const [toggle, setToggle] = useState(false);
      const [modal, setModal] = useState(false);

      //render next 10 items when the currentPage changes
      useEffect(()=>{
        if(${entityName}Copys.length<=pageSize){
          setPropertiesToShow(${entityName}Copys)
        }
        else{
        const propertiesToSplice = [...${entityName}Copys];
        setPropertiesToShow(propertiesToSplice.splice(startIndex,pageSize))
        }
      
      },[startIndex,${entityName}Copys]);
      
      
      
      const fetch${entityName}s = async () => {
        const ${entityName}Response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts//"
        );
        if (${entityName}Response && ${entityName}Response.data) {
          set${entityName}s(${entityName}Response.data);
          set${entityName}Copys(${entityName}Response.data);
        }
        
      };

      useEffect(()=>{
        fetch${entityName}s();
        return () => {};
      },[])
      
      console.log('entityname',${entityName}s)
      console.log('entityname',${entityName}Copys)

      const openModal = () => {
        setToggle(!toggle);
        setModal(!modal);
      };
      
      const editEmployee=(id)=>{

      }
      const deleteEmployee=(id)=>{
    
      }
  
      const updateSearch=(e)=>{
        setSearch(e.target.value);
          if(search && ${entityName}s){
            set${entityName}Copys( ${entityName}s)
            console.log( ${entityName}Copys)
            const filteredItems=${entityName}s && ${entityName}s.length?
            ${entityName}s.filter(entity=>{
              console.log(entity)
               const {User}=entity;
              return User.startsWith(e.target.value)
            }):'no match found'
            set${entityName}Copys(
              filteredItems
            )
            console.log( ${entityName}Copys)
          }
      }
      
      return <div>
          <div className='d-flex'>
          <h1 className='mr-auto'>  ${entityName}List</h1>
          <button
          className='btn btn-primary'
           onClick={openModal} 
           style={{height:'37px',width:'76px'}}>
          Add<i className="fa fa-plus-square fa-2x" aria-hidden="true" title='add' /></button>  
        {toggle?<GenerateCreateComponent toggle={toggle} modal={modal} clicked={openModal} />:''}
          </div>
          
          <hr></hr>
          <input 
          type='input' 
          placeholder='Search' 
          value={search} 
          onChange={(e)=>updateSearch(e)}
          className='form-control'
          />
         {${entityName}Copys && ${entityName}Copys.length ?
         <>
         <Table striped hover>
         
         ${GenerateTableHeader(entityName,properties)}
         ${GenerateTableBody(entityName,properties)}
         
         </Table>
         <Pagination 
         setStartIndex={setStartIndex}
         pageSize={pageSize }
         count={${entityName}Copys.length}></Pagination>
         </>:<h2 style={{textAlign:"center"}}>No match found</h2>
        }
       
      </div>;
    }
       
    `
}




 function GenerateTableHeader(entityName,properties) {
console.log(properties)

// const theadToRender=Object.keys(properties[0]).map(thead=>`<th>${thead.name}</th>`).concat([`<th>Action</th>`]).join(' ')
// console.log("theadToRender",theadToRender)
// return `<thead><tr style={{textAlign:"center"}}>${theadToRender}</tr></thead>`
  const theadToRender = properties.map(propName=>{
    return `<th>${propName.name}</th>`
  }).concat([`<th>Action</th>`]).join(' ')
  console.log("theadToRender",theadToRender)
  return `<thead><tr style={{textAlign:"center"}}>${theadToRender}</tr></thead>`
}

function GenerateTableBody(entityName,properties){
  
`{${entityName}Copys.map(${entityName} => {
  return (`  
  const tbodyToRender=properties.map(propName=>{
    return `<td>{${entityName}['${propName.name}']}</td>`
  }).concat([`<td>
  <i class="fa fa-pencil-square-o fa-2x mr-4" data-toggle='tooltip' title='edit' aria-hidden="true"  onClick={(id)=>edit${entityName}(id)}></i>
  <i class="fa fa-trash-o fa-2x" data-toggle='tooltip' title='delete' aria-hidden="true" onClick={(id)=>delete${entityName}(id)}></i>
  </td>`]).join(' ')

  
  return `<tbody>{
    ${entityName}Copys.map(${entityName} => {
      return (
    <tr style={{textAlign:"center"}}> ${tbodyToRender} </tr>)
    })
  }
  </tbody>`
}

