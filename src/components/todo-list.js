import React from 'react';

import TodoListItem from './todo-list-item';

const TodoList = ({todos}) => {

  const todoItems = Array.from(todos).map (item=><li>{<TodoListItem important = {item.important} label = {item.label}/>}</li>)
  return (
    <ul>
      {todoItems}
    </ul>
  );
};

export default TodoList;