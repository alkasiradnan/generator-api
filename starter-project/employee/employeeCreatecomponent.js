

    import React from 'react';
    import DynamicForm from '../shared/DynamicForm';

    export default function EmployeeCreateComponent({}) {

  var properties = [{"name":"User","type":"Text"},{"name":"Telphone","type":"Tel"},{"name":"Date","type":"Date"},{"name":"select me","type":"Select"},{"name":"Check","type":"CheckBox"},{"name":"blue","type":"Color"},{"name":"path","type":"File"},{"name":"img","type":"Image"},{"name":"Contact","type":"Number"},{"name":"radio","type":"RadioButton"},{"name":"url","type":"URL"}];
  return (
      <div>
    
        <form>
            <div className="form-group">
         <label> User </label>
        <input type="text" className="form-control"  />
    </div>
<div className="form-group">
             <label> Telphone </label>
           <input type="tel" name="phone" className="form-control" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
        </div>
<div className="form-group">
            <label> undefined </label>
            <input type="date" className="form-control" />
        </div>
<div className="form-group">
             <label> select me </label>
            <select id="inputState" className="form-control">
                <option selected>Choose...</option>
                <option>...</option>
            </select>
        </div>
<div className="form-group"> 
    <input className="form-check-input" type="checkbox" id="gridCheck" />    
    <label className="form-check-label" for="gridCheck"> Check me out </label>
    </div>
<div className="form-group">
            <input type="color" name="favcolor" className="form-control" />
            <label> blue </label>
        </div>
<div className="form-group">
           Select a file: <input type="file" name="myFile" className="form-control" />
        </div>
<div className="form-group">
             <label> img </label>
            <img src=img alt="Italian Trulli" className="form-control" />
        </div>
<div className="form-group">
             <label> Contact </label>
            <input type="number" min="1" className="form-control" />
        </div>
<div className="form-group">
             <label> radio </label>
            <input type="radio" value="option1" checked={true} className="form-control" />
        </div>
<div className="form-group">
             <label> url </label>
            <input type="url" className="form-control" />
        </div>
            <div class="form">
                <button type="submit" class="btn btn-primary">Sign in</button>
            </div>
            </form>
    </div>
  );
}

    