import React, { useEffect, useState } from "react";
import axios from 'axios';

import Table from "../DataTable/Table";

export default function TodoList() {
  const [todos, setTodos] = useState();
  const fetchTodos = async () => {
    const todoResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    if (todoResponse && todoResponse.data) {
      setTodos(todoResponse.data);
    }
  };
  useEffect(() => {
    fetchTodos();
    return () => {};
  }, []);
  return <div>
      <h1>Todos List</h1>
      <hr></hr>
     {todos && todos.length && <Table items={todos}></Table>}
  </div>;
}
