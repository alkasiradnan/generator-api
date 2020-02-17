import React, { useEffect, useState } from "react";
import TableHeader from './TableHead';
import TableBody from './TableBody';

import Pagination from './Pagination';

export default function Table({ items }) {
  const [startIndex, setStartIndex] = useState(0)
  const [pageSize, setPageSize] = useState(10);

  const [itemsToShow, setItemsToShow] = useState()
  //render next 10 items when the currentPage changes
  useEffect(()=>{
    if(items.length<=pageSize){
      setItemsToShow(items)
    }
    else{
    const itemsToSplice = [...items];
    setItemsToShow(itemsToSplice.splice(startIndex,pageSize))
    }
  
  },[startIndex,items]);
  


  // columns
  const [columns, setColumns] = useState();
  useEffect(() => {
    if (items && items.length) {
      const columns = Object.keys(items[0]);
      setColumns(columns)
    }
    return () => {};
  }, [items]);

  return itemsToShow && itemsToShow.length && columns && columns.length? <>
  <table className='table table-striped'>
  <TableHeader columns={columns}></TableHeader>
  <TableBody columns={columns} items={itemsToShow}></TableBody>
  </table>
  
  <Pagination count={items.length}
  pageSize={pageSize}
 
  setStartIndex={setStartIndex}

  
  ></Pagination>
  </>:<p>No data Found</p>;
}




  




 


