import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({label, important})=>{
    return (
        <span className = 'todo-list-item' style = {{fontWeight:important?'bold':'normal'}}>{label}</span>
    )
}

export default TodoListItem;