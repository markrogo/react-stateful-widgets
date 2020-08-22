import React from 'react'

export default function Todo ( { todo, toggleTodo }) {
    function handleTodoClick () {
        toggleTodo(todo.id)
    }
    const style = {
        fontSize: '1em',
        marginBottom: '0.3em',
        color: (todo.complete === false) ? 'green' : 'red'
      };

    return (

        <div style={style}>
            <label>
            <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}/>
            {todo.name}
            </label>
        </div>
    )

}
