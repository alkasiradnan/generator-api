import React,{Component} from 'react';
import axios from 'axios';
import Table from './Table';


class DataTable extends Component{
    state={
      itemList:[],
      
    }
    componentDidMount(){
        
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(response=>{
            const updatedLists=response.data.splice(0,50)
           this.setState({
               itemList:updatedLists
           },()=>{console.log(this.state.itemList)})
        })
    }
    
    

     render(){
       
        const keyNAmes=  this.state.itemList.length?( Object.keys(this.state.itemList[0])):null
        console.log(keyNAmes)
         
        
         return (
             <div>
                 <div className='d-flex '>
                 <div className='dropdown mr-auto'>
                   Show  <button className='btn dropdown-toggle' data-toggle='dropdown'></button>Enteries
                   <div className='dropdown-menu '>
                       <a className='dropdown-item'>10</a>
                       <a className='dropdown-item'>25</a>
                       <a className='dropdown-item'>50</a>
                       <a className='dropdown-item'>100</a>
                   </div>
                   </div>
                   
                   <div>
                       <i className='fas fa-search' aria-hidden='true'></i>
                       <input className='form-control' placeholder='Search'  aria-label='Search'></input>
                   </div>
                
                 </div>
                 <Table items={this.state.itemList}></Table>
                
              
                
             </div>
         )
     }
}

export default DataTable;