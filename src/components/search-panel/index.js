import React, { Component } from "react";
import "./search-panel.css";

class SearchPanel extends Component {
  state = {
    term: "",
  };
  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchChange(e.target.value.toLowerCase());
  };
  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="type to search"
        onChange={this.onSearchChange}
        value={this.state.search}
      />
    );
  }
}
export default SearchPanel;
