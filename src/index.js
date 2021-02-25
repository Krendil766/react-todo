import React from "react";
import ReactDOM from "react-dom";

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list'

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
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
