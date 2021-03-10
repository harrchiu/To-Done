// child of TodoList; single todo

import React from 'react';

const Todo = ( {text,id,todo,todos,setTodos}) =>{

  // trash a todo on command (garbage can)
  // note: todo.id is the one currently being actioned
  const deleteHandler = () => {
    setTodos(todos.filter( (qq) => qq.id !== todo.id) ) ;
  };

  // check off a todo on command (green icon)
  const completeHandler = () => {
    setTodos(todos.map( (qq) => {
      if (qq.id === todo.id){
        return{
          ...qq, completed: !qq.completed//true
        }
      }
      return qq
    }));
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed":""}`} > {text} </li>

      <button onClick={completeHandler} 
        className="complete-btn">
        <i className={`fas fa-${todo.completed ? "undo":"check"}`}></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;