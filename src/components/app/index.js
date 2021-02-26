import React, { Component } from "react";

import AppHeader from "../app-header/";
import SearchPanel from "../search-panel/";
import TodoList from "../todo-list/";
import ItemStatusFilter from "../item-status-filter";

import "./style.css";

class App extends Component {
  state = {
    todoData: [
      { label: "Learn React", important: true, id: 1 },
      { label: "Learn Webpack", important: true, id: 2 },
      { label: "Learn JS", important: false, id: 3 },
      { label: "Learn English", important: true, id: 4 },
      { label: "Learn TypeScript", important: false, id: 5 },
      { label: "Learn Redux", important: true, id: 6 },
      { label: "Learn Hooks", important: false, id: 7 },
    ],
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: todoData.filter((item) => item.id !== id),
      };
    });
  };

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todos={this.state.todoData} onDeleted={this.deleteItem} />
      </div>
    );
  }
}

export default App;
