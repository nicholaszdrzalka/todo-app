import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")

    const handleSubmit = ev => {
        ev.preventDefault();

        addTodo(value)

        setValue("")
    }
    return(
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='text' className='todo-input'
            value={value} 
            placeholder='What is the task today?'
            onChange={(ev) => setValue(ev.target.value)}/>
            <button type='submit' className='todo-btn'>Add Task</button>
        </form>
    )
}