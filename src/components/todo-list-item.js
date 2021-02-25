import React from 'react';

const TodoListItem = ({label, important})=>{
    return (
        <span style = {{fontWeight:important?'bold':'normal'}}>{label}</span>
    )
}

export default TodoListItem;