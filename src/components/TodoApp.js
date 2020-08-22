import React, { useState, useRef, useEffect } from 'react'
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid'



const LOCAL_STORAGE_KEY = 'todoApp.todos'

function TodoApp() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef ()
  

  useEffect (() => {
    const storedTodos = JSON.parse(localStorage.getItem (LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos (setTodos)
  }, [])

  useEffect (() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))

  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  const style = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }
  function handleClearTodos() {
    const newTodos = todos.filter (todo => !todo.complete)
    setTodos (newTodos)
  }
  
  
  return (
    <div className = 'container'> 
      <h2>To-Do List</h2>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type='text' />
      <button onClick={handleAddTodo}>Add To-do </button>
      <button onClick={handleClearTodos}>Remove Finished Tasks</button>
      <div>{todos.filter (todo => !todo.complete).length} tasks left to do</div>
    </div>
  )   
}

export default TodoApp;
