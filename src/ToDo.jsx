import React from 'react'
import {MdOutlineDeleteSweep} from 'react-icons/md'

const ToDo = ({todo, toggleTask, removeTask}) => {
  return (
    <div key={todo.id} className='item-todo'>
        <div className={todo.complete ? 'item-text strike' : 'item-text'} onClick={() => toggleTask(todo.id)}>
            {todo.text}
        </div>
        <div className='remove-task' onClick={() => removeTask(todo.id)}>
            <MdOutlineDeleteSweep/>
        </div>
    </div>
  )
}

export default ToDo