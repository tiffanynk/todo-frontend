import React from 'react'

export default function TodoItem ({id, title, content, urgent, deleteTodo}){

    const handleClick = () => {
        deleteTodo(id)
    }

    return (
        <li className={urgent ? 'todo-item urgent' : 'todo-item'}>
            <h2>{title}</h2>  
            <p>{content}</p>
            <button className='delete' onClick={handleClick}>DELETE</button>
        </li>
    )
}
