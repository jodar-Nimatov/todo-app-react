import React from "react";
import { useState, useEffect } from "react";
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";
import './style.scss'

function App() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTask = (userInput) => {
    if(userInput) {
      const newTask = {
        id: Math.random().toString(36).substr(2.9),
        text: userInput,
        comeplete: false
      }
      setTodos([...todos, newTask])
    }
  }

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) => 
        todo.id === id ? { ...todo, complete: !todo.complete } : {...todo }
      )
    ])
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List: {todos.length}</h1>
      </header>
      <ToDoForm
        addTask={addTask}
      />
      <div>
        {todos.map((todo) => {
          return (
            <ToDo
              key={todo.id}
              todo={todo}
              removeTask={removeTask}
              toggleTask={handleToggle}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;
