import React, {useState, useEffect} from "react";
import "./App.css";

//importing components
import Form from "./components/Form.js"
import TodoList from "./components/TodoList.js"

function App(){
  const [inputText,setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const filterHandler = () => {
    console.log("new+" + status);
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === "true"));
        console.log("this is comp");
        console.log(filteredTodos);
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === "false"));
        break;
      case 'all':
        setFilteredTodos(todos);
        break;
    }
  }
  useEffect(()=>{
    filterHandler();
  }, [todos, status]);

  return(
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
        todos={todos}/>
    </div>
  
  )
}
export default App;