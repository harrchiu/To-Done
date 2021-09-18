import React from "react";
const Form = ({ setInputText,inputText,todos,setTodos,status,setStatus }) => {

  // we define a bunch of handlers (one for submitting, deleting, etc.)
  // then call it when the appropriate action is done

  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {

    e.preventDefault();   // stop the page from refreshing
                          // you'd be able to see this if you commented it out
    if (inputText === ""){  // stop null entries
      return;
    }

    // use the current text, append to todos list
    setTodos([
      ...todos, {text: inputText, completed: false, id:Math.random()*1000 }
    ]);
    setInputText("");   // clear the input text
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  }

  return (
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input"/>
      
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>

      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
// same as 
// Function Form(){
//
//} 