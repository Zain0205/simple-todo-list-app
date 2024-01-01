import React from "react";
import { FaPlus } from "react-icons/fa";

function AddTodo({ addTodoInput, addTodoButton, newTask }) {
  return (
    <div className="addForm">
      <input id="add" onChange={addTodoInput} placeholder="Add Todo" type="text" />
      <button onClick={addTodoButton}>
        <FaPlus />
      </button>
    </div>
  );
}

export default AddTodo;
