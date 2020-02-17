import React from 'react';
import './App.css';
import DynamicForm from './component/DataTypes/DynamicForm';

export default function ToDo({formContent}) {

  
  return (
      <DynamicForm items = {formContent}/>
  );
}

