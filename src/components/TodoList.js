import React from "react";
// Import components
import Todo from "./Todo";

function TodoList( {todos, setTodos, filteredTodos} ){
  return(
    <div className="todo-container">
      <ul className="todo-list">

        { filteredTodos.map(thing1 => (
          <Todo 
            setTodos={setTodos} 
            todos={todos} 
            text={thing1.text} 
            todo={thing1}
            id={thing1.id}/>
        ))}
      </ul>
    </div>
  )
}

export default TodoList;