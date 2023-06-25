import React from 'react'
import { useState } from 'react'

const ToDoForm = ({addTask}) => {

    const [userInput, setUserInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput('')
    }

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }   

    const handleKeyPress = (e) => {
        if(e.key === "Enter"){
            handleSubmit(e)
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <input
         type="text" 
         value={userInput}
         onChange={handleChange}
         placeholder='Write a new task...'
         onKeyDown={handleKeyPress}
         />
         <button>Add Task</button>
    </form>
  )
}

export default ToDoForm