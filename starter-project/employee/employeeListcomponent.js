

    import React, { useEffect, useState } from "react";
    import axios from 'axios';
    import { Table } from 'reactstrap';
    // import Edit from './Action/Edit';
    // import Delete from './Action/Delete ';
    import Pagination from '../shared/DataTable/Pagination';
    

    export default function EmployeeListComponent() {
      const [Employees, setEmployees] = useState();
      const [startIndex, setStartIndex] = useState(0)
      const [pageSize, setPageSize] = useState(10);
    
      const [propertiesToShow, setPropertiesToShow] = useState()
      //render next 10 items when the currentPage changes
      useEffect(()=>{
        if(Employees.length<=pageSize){
          setPropertiesToShow(Employees)
        }
        else{
        const propertiesToSplice = [...Employees];
        setPropertiesToShow(propertiesToSplice.splice(startIndex,pageSize))
        }
      
      },[startIndex,Employees]);
      
      console.log(Employees)

      
      const fetchEmployees = async () => {
        const EmployeeResponse = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (EmployeeResponse && EmployeeResponse.data) {
          setEmployees(EmployeeResponse.data);
        }
      };

      useEffect(() => {
        fetchEmployees();
        return () => {};
      }, []);

      const editEmployee=(id)=>{

      }
      const deleteEmployee=(id)=>{
    
      }
      
      return <div>
          <h1> Employee List</h1>
          <hr></hr>
         {Employees && Employees.length && 
         <Table striped>
         
         <thead><tr><th>User</th> <th>Telphone</th> <th>Date</th> <th>select me</th> <th>Check</th> <th>blue</th> <th>path</th> <th>img</th> <th>Contact</th> <th>radio</th> <th>url</th> <th>Action</th></tr></thead>
         <tbody><tr> <td>User</td> <td>Telphone</td> <td>Date</td> <td>select me</td> <td>Check</td> <td>blue</td> <td>path</td> <td>img</td> <td>Contact</td> <td>radio</td> <td>url</td> <td>
  <i class="fa fa-pencil-square-o fa-2x mr-4" data-toggle='tooltip' title='edit' aria-hidden="true"  onClick={(id)=>editEmployee(id)}></i>
  <i class="fa fa-trash-o fa-2x" data-toggle='tooltip' title='delete' aria-hidden="true" onClick={(id)=>deleteEmployee(id)}></i>
  </td> </tr></tbody>
         
         </Table>
         
        }
        <Pagination 
          setStartIndex={setStartIndex}
          pageSize={pageSize }
          count={Employees.length}></Pagination>
      </div>;
    }
       
    