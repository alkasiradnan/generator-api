

    import React, { useEffect, useState } from "react";
    import axios from 'axios';
    
    import Table from "../shared/DataTable/Table";
    
    export default function EmployeeListComponent() {
      const [Employees, setEmployees] = useState();
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
      return <div>
          <h1> Employee List</h1>
          <hr></hr>
         {Employees && Employees.length && <Table items={Employees}></Table>}
      </div>;
    }
       
    