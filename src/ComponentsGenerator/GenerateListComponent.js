module.exports = function GenerateListComponent(entityName) {
    return `

    import React, { useEffect, useState } from "react";
    import axios from 'axios';
    
    import Table from "../shared/DataTable/Table";
    
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
      return <div>
          <h1> ${entityName} List</h1>
          <hr></hr>
         {${entityName}s && ${entityName}s.length && <Table items={${entityName}s}></Table>}
      </div>;
    }
       
    `
}