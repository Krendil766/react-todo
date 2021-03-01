import React, { Component } from "react";

import AppHeader from "../app-header/";
import SearchPanel from "../search-panel/";
import TodoList from "../todo-list/";
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "../item-add-form";

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
    countMore: 0,
    countDone: 0,
  };

  onToggleDone  = (id)=>{
    console.log(id);
  }
  onToggleImportant = (id)=>{
    console.log(id);
    
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: todoData.filter((item) => item.id !== id),
      };
    });
  };
  addItem = (value) => {
    const generateId =
      Math.random().toString(32).substring(2, 9) + (+new Date()).toString(32);
    const newItem = {
      label: value,
      important: false,
      id: generateId,
    };
    this.setState(({todoData})=>{
      return {
        todoData:[...todoData,newItem]
      }
    })
  };

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={this.state.countDone} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todos={this.state.todoData} onDeleted = {this.deleteItem} onToggleDone = {this.onToggleDone} onToggleImportant = {this.onToggleImportant}/>
        <ItemAddForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
