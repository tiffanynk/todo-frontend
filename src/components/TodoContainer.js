import React from 'react';
import TodoItem from './TodoItem';

function TodoContainer({todos, deleteTodo}) {
    //spread operator on todo as props. gives props of id, title, content, urgent. dont need to destructure a second time (see TodoItem)
    const renderTodoItems = () => {
        return todos.map(todo => <TodoItem key={todo.id} deleteTodo={deleteTodo} {...todo}/>)
    }

    return (
        <ul className='todo-list'>
            {renderTodoItems()}
        </ul>
    )
}

export default TodoContainer;