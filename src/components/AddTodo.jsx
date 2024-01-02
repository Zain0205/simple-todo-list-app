import React from "react";
import { FaPlus } from "react-icons/fa";

function AddTodo({ addTodoInput, addTodoButton }) {
  return (
    <div className="addForm">
      <input 
        id="add" 
        onChange={addTodoInput} 
        placeholder="Add Task" 
        type="text" 
      />
      <button onClick={addTodoButton}>
        <FaPlus />
      </button>
    </div>
  );
}

export default AddTodo;
