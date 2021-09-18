import React, {useState, useEffect} from "react";
import "./App.css";

//importing components
import Form from "./components/Form.js"
import TodoList from "./components/TodoList.js"

// main function
function App(){
 
  // defines a variable, and its *setter*
  // use the setter to set the variable lol im only 12 please

  const [inputText,setInputText] = useState("");    // input text bar
  const [todos, setTodos] = useState([]);           // list of todos (entered)

  // current dropdown status [all, completed, uncompleted]
  const [status, setStatus] = useState("all");
  // current list to load (depends on status)
  const [filteredTodos, setFilteredTodos] = useState([]);

  const filterHandler = () => {   // change list to load from status change
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      case "all":
        setFilteredTodos(todos);
        break;
    }
  }

  useEffect(()=>{   // this will run one time, when the app starts
    getLocalTodos();  
  }, []);

  useEffect(()=>{   // anytime todos OR status state changes, runs filterHandler()
    filterHandler();
    saveLocalTodos();   // also want to save each time
  }, [todos, status]);

  // store todos locally (push todos to 'storedTodos')
  const saveLocalTodos = () => {
    localStorage.setItem('storedTodos', JSON.stringify(todos));
  };
  // retrieve todos from local
  const getLocalTodos = () => {
    // can't read if refreshing null, so skip
    if (localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]) );
    } else {  // otherwise normal load
      setTodos(JSON.parse(localStorage.getItem('storedTodos')));
    }
  };

  return(           // main
    <div className="App">

      <header> 
        <h1>Todo List.</h1>
      </header>

      <Form 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText} 
        inputText={inputText}
        status={status}
        setStatus={setStatus}
      />

      <TodoList 
        filteredTodos={filteredTodos}
        setTodos={setTodos} 
        todos={todos}
      />

    </div>
  )
}
export default App;