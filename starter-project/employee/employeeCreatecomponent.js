

    import React from 'react';
    import DynamicForm from '../shared/DynamicForm';

    export default function EmployeeCreateComponent({}) {

  var properties = [{"name":"User","type":"Text"},{"name":"Telphone","type":"Tel"},{"name":"Date","type":"Date"}];
  return (
      <div>
    
        <form>
            <div className="form-group">
         <label> User </label>
        <input type="text" className="form-control"  />
    </div>


            <div class="form">
                <button type="submit" class="btn btn-primary">Sign in</button>
            </div>
            </form>
    </div>
  );
}

    