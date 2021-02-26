import React, {Component} from "react";

import "./item-status-filter.css";

class ItemStatusFilter extends Component {
  state = {
    value :false
  }
  toggleClass=()=>{
    this.setState({value:!this.state.value})
  }
  render(){
    return (
      <div className="btn-group">
        <button type="button" onClick = {this.toggleClass} className={`btn ${this.state.value?"btn-info":"btn-outline-secondary"}`}>
          All
        </button>
        <button type="button" onClick = {this.toggleClass} className={`btn ${this.state.value?"btn-info":"btn-outline-secondary"}`}>
          Active
        </button>
        <button type="button" onClick = {this.toggleClass} className={`btn ${this.state.value?"btn-info":"btn-outline-secondary"}`}>
          Done
        </button>
      </div>
    );
  }
}



export default ItemStatusFilter;
