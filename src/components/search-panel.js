import React from "react";

const SearchPanel = () => {
  const searchText = "Type here to search";
  const searchStyle = {
    fontSize: "20px",
    border: "2px solid red",
  };
  return <input style={searchStyle} type="text" placeholder={searchText} />;
};

export default SearchPanel;
