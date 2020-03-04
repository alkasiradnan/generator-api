module.exports = function GenerateListComponent(entityName,properties) {
  

 
console.log("properties in header",properties)
    return `
    import React,{Component} from 'react';
    import axios from 'axios';
    import { Table } from 'reactstrap';
    import ${entityName}CreateComponent from './${entityName.toLowerCase()}CreateComponent';
    import ${entityName}EditComponent from './${entityName.toLowerCase()}EditComponent';
    import ${entityName}DeleteComponent from './${entityName.toLowerCase()}DeleteComponent';
    import Pagination from '../shared/DataTable/Pagination';
    

    class EmployeeListComponent extends Component{
      state={
        ${entityName}s:[
         {user:'Abcd',telephone:'7304541558',date:'23/05/2005'},
         {user:'wfdfd',telephone:'9304541558',date:'26/05/2005'},
         {user:'hdfdn',telephone:'6304541558',date:'24/05/2005'}
       ],
       ${entityName}Copys:[
         {user:'Abcd',telephone:'7304541558',date:'23/05/2005'},
         {user:'wfdfd',telephone:'9304541558',date:'26/05/2005'},
         {user:'hdfdn',telephone:'6304541558',date:'24/05/2005'}
       ],
       sortKey:'',
       startIndex:0,
       pageSize:10,
       propertiesToShow:'',
       search:'',
       toggle:false,
       modal:false,
       flag:0,
       data:null
      }
      
      fetch${entityName}s = async () => {
        const ${entityName}Response = await axios.get(
          "http://localhost:3000/employee-data/"
        );
        if (${entityName}Response && ${entityName}Response.data) {
          this.setState({ ${entityName}:${entityName}Response.data});
          this.setState({${entityName}Copys:${entityName}Response.data});
        }
        
      };
  
      componentDidMount(){
        this.fetchEmployees();
          return () => {};
      }
  
    

      openModal = () => {
        this.setState({toggle:!this.state.toggle});
        this.setState({modal:!this.state.modal});
        this.setState({flag:1});
      };
      
       editEmployee=(data)=>{
        this.setState({toggle:!this.state.toggle});
        this.setState({modal:!this.state.modal});
        this.setState({flag:2});
        this.setState({data:this.state.data});
      }
       deleteEmployee=(id)=>{
    
      }
     
      updateSearch=(e)=>{
        this.setState({search:e.target.value});
          if(this.state.search && this.state.${entityName}s){
           this.setState({${entityName}s:this.state.${entityName}s} )
            //console.log( ${entityName}Copys)
            const filteredItems=this.state.${entityName}s && this.state.${entityName}s.length?
            this.state.${entityName}s.filter(entity=>{
              //console.log(entity)
               const {user}=entity;
              return user.startsWith(e.target.value)
            }):'no match found'
            this.setState(
              {${entityName}Copys:filteredItems}
            )
           
          }
      }
      

      sorting=()=>{
        //console.log(key)
        if(this.state.${entityName}Copys && this.state.sortKey){
          console.log(sortkey)
          return this.state.${entityName}Copys.sort((a,b)=>{
            //console.log('a',a);
            //console.log('b',b);
            const x=a[this.state.sortKey.toLowerCase()];
            const y=b[this.state.sortKey.toLowerCase()];
            //console.log('first',x)
            //console.log('second',y)
            if(x<y){return -1};
            if(x>y){return 1};
          });
        }
        return this.state.EmployeeCopys;
       }

          render(){
            if(this.state.startIndex && this.state.${entityName}Copys){
              console.log(this.state.${entityName}Copys);
              
              if(this.state.${entityName}Copys.length<=this.state.pageSize){
                this.setState({propertiesToShow:this.state.${entityName}Copys})
              }
              else{
              const propertiesToSplice = [...this.state.${entityName}Copys];
              this.setState({propertiesToShow:propertiesToSplice.splice(this.state.startIndex,this.state.pageSize)})
              }
            }
         
      return <div style={{padding : "0 0.5rem"}}>
      <div className='d-flex mt-2 align-items-center'>
      <h1 className='mr-auto'> ${entityName}List</h1>
      <button
      className='btn btn-primary d-flex align-items-center '
       onClick={this.openModal} 
       style={{height:"35px",fontSize: "1.2rem",
      padding: "0 .5rem"}}>
      <i className="fa fa-plus-square mr-2"  style={{fontSize:"1.5rem"}} aria-hidden="true" title='add' ></i>Add</button>  
    {this.state.flag === 1?<${entityName}CreateComponent toggle={this.state.toggle} modal={this.state.modal} clicked={this.openModal} />:''}
    {this.state.flag ===2 ?<${entityName}EditComponent toggle={this.state.toggle} data={this.state.data} modal={this.state.modal} clicked={this.openModal} />:''}
      </div>
      
          
          <hr></hr>
          <input 
          type='input' 
          placeholder='Search' 
          value={this.state.search} 
          onChange={(e)=>this.updateSearch(e)}
          className='form-control'
          />
         {this.state.${entityName}Copys && this.state.${entityName}Copys.length ?
         <>
         <Table striped hover>
         
         ${GenerateTableHeader(entityName,properties)}
         ${GenerateTableBody(entityName,properties)}
         
         </Table>
         <Pagination 
         setStartIndex={this.state.startIndex}
         pageSize={this.state.pageSize }
         count={this.state.${entityName}Copys.length}></Pagination>
         </>:<h2 style={{textAlign:"center"}}>No match found</h2>
        }
       
      </div>;
    }

    
  }  
  export default ${entityName}ListComponent;
    `
}




 function GenerateTableHeader(entityName,properties) {
console.log(properties)

// const theadToRender=Object.keys(properties[0]).map(thead=>`<th>${thead.name}</th>`).concat([`<th>Action</th>`]).join(' ')
// console.log("theadToRender",theadToRender)
// return `<thead><tr style={{textAlign:"center"}}>${theadToRender}</tr></thead>`
  const theadToRender = properties.map(propName=>{
    return `<th>${propName.name}
     <i class="fas fa-angle-up" onClick={()=>this.setState({sortKey:'${propName.name}'})}></i></th>`
  }).concat([`<th>Action</th>`]).join(' ')
  console.log("theadToRender",theadToRender)
  return `<thead><tr style={{textAlign:"center"}}>${theadToRender}</tr></thead>`
}

function GenerateTableBody(entityName,properties){
  
`{${entityName}Copys.map(${entityName} => {
  return (`  
  const tbodyToRender=properties.map(propName=>{
    return `<td>{${entityName}['${propName.name.toLowerCase()}']}</td>`
  }).concat([`<td>
  <i class="fa fa-pencil-square-o fa-2x mr-4" data-toggle='tooltip' title='edit' aria-hidden="true"  onClick={(id)=>this.edit${entityName}(${entityName})}></i>
  <i class="fa fa-trash-o fa-2x" data-toggle='tooltip' title='delete' aria-hidden="true" onClick={(id)=>this.delete${entityName}(id)}></i>
  </td>`]).join(' ')

  
  return `<tbody>{
    this.sorting().map(${entityName} => {
      return (
    <tr style={{textAlign:"center"}}> ${tbodyToRender} </tr>)
    })
  }
  </tbody>`
}

