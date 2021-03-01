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
      { label: "Learn React", important: false, id: 1, done: false },
      { label: "Learn Webpack", important: false, id: 2, done: false },
      { label: "Learn JS", important: false, id: 3, done: false },
      { label: "Learn English", important: false, id: 4, done: false },
      { label: "Learn TypeScript", important: false, id: 5, done: false },
      { label: "Learn Redux", important: false, id: 6, done: false },
      { label: "Learn Hooks", important: false, id: 7, done: false },
    ],
  };
  togglePropperty = (arr, id, propName) => {
    // const idx = arr.findIndex(item => item.id === id);
    // const oldItem = arr[idx];
    // const newItem = { ...oldItem, [propName]: !oldItem[propName] }
    // return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
    return arr.map(item => {
      if (item.id === id) {
        return {...item, [propName]:!item[propName]}
      }
      return item;
    })
  }
  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.togglePropperty(todoData, id, 'done')
      }
    })
  }
  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.togglePropperty(todoData,id,'important')
      }
    })
  }
  generateId = () => {
    return Math.random().toString(32).substring(2, 9) + (+new Date()).toString(32);
  }
  createTodoItem = (label) => {
    return {
      label,
      important: false,
      done: false,
      id: this.generateId(),
    }
  }
  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: todoData.filter((item) => item.id !== id),
      };
    });
  };
  addItem = (value) => {
    const newItem = this.createTodoItem(value)
    this.setState(({ todoData }) => {
      return {
        todoData: [...todoData, newItem]
      }
    })
  };

  render() {
    const { todoData } = this.state;
    const doneCount = todoData.filter(item => item.done).length;
    const todoCount = todoData.length - doneCount;
    console.log(todoData);
    
    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todos={todoData} onDeleted={this.deleteItem} onToggleDone={this.onToggleDone} onToggleImportant={this.onToggleImportant} />
        <ItemAddForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
