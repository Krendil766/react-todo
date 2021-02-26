import React from "react";
import ReactDOM from "react-dom";

import AppHeader from './components/app-header/';
import SearchPanel from './components/search-panel/';
import TodoList from './components/todo-list/'
import ItemStatusFilter from './components/item-status-filter'

import './index.css'
const App = () => {

  const todoData = [
    {label:"Learn React", important:true, id:1},
    {label:"Learn Webpack", important:true, id:2},
    {label:"Learn JS", important:false, id:3},
    {label:"Learn English", important:true, id:4},
    {label:"Learn TypeScript", important:false, id:5},
    {label:"Learn Redux", important:true, id:6},
    {label:"Learn Hooks", important:false, id:7},
  ];

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
