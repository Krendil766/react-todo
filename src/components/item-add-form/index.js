import React, { Component } from "react";

import "./style.css";

class ItemAddForm extends Component {
  state = {
    item: "",
  };

  onClickAdd=()=>{
    const input = document.querySelector('#input')
    // console.log(input.value);
    this.props.addItem(input.value)
    input.value="";
  }

  render() {
    return (
      <div className = "item-add-form">
        <input id='input' type="text" placeholder="Add tasks" />
        <button onClick = {this.onClickAdd} className = "btn btn-outline-secondary">Add</button>
      </div>
    );
  }
}

export default ItemAddForm;
