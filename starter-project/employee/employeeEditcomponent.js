

    import React from 'react';
    import DynamicForm from '../shared/DynamicForm';

    export default function EmployeeCreateComponent({}) {
      const [employee,setEmployee] =useState({})
  var properties = [{"name":"User","type":"Text"},{"name":"Telphone","type":"Tel"},{"name":"Date","type":"Date"}];
  return (
      <div>
    
        <form>
            <div className="form-group">
         <label> User </label>
        <input type="text" className="form-control" value = {employee['User']}  />
    </div>
<div className="form-group">
             <label> Telphone </label>
           <input type="tel" name="phone" className="form-control" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"  value = {employee['Telphone']} />
        </div>
<div className="form-group">
            <label> Date </label>
            <input type="date" className="form-control" value = {employee['Date']} />
        </div>
            <div class="form">
                <button type="submit" class="btn btn-primary">Sign in</button>
            </div>
            </form>
    </div>
  );
}

    