import React, { useState } from "react";
import ListCard from "./ListCard";
import AddTodo from "./AddTodo";
import NotFound from "./NotFound";

function Main() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    const newTodoInput = e.target.value;
    const newTodoObject = {
      id: new Date(),
      task: newTodoInput,
      checked: false,
      editAble: false,
    };
    setNewTask(newTodoObject);
  };

  const addNewTodo = () => {
    const newTodoList = [...todoList, newTask];
    setTodoList(newTodoList);
  };

  const delleteTodo = (id) => {
    const deletedTodo = todoList.filter((todo) => todo.id !== id);
    setTodoList(deletedTodo);
  };

  const handleChecked = (id) => {
    const checkedTodo = todoList.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo));

    setTodoList(checkedTodo);
  };

  const editTask = (id) => {
    const editedTask = todoList.map((todo) => (todo.id === id ? { ...todo, editAble: !todo.editAble } : todo));

    setTodoList(editedTask);
  };

  return (
    <main>
      <div>
        <AddTodo addTodoButton={addNewTodo} addTodoInput={handleChange} />
        {todoList.length ? todoList.map((todo) => 
          <ListCard 
            key={todo.id} 
            id={todo.id} 
            task={todo.task} 
            checked={todo.checked} 
            edit={todo.editAble} 
            dellete={delleteTodo} 
            handleCheckBox={handleChecked} 
            handleEdit={editTask}  
          />) : (<NotFound />)}
      </div>
    </main>
  );
}

export default Main;










// <ListCard 
  // key={todo.id} 
  // id={todo.id} 
  // task={todo.task} 
  // checked={todo.checked} 
  // edit={todo.editAble} 
  // dellete={delleteTodo} 
  // handleCheckBox={handleChecked} 
  // handleEdit={editTask} 
// />