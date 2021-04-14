import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  handleFilterTextChange = e => {
    this.props.handleFilterTextChange(e.target.value);
  };
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder=''
          value={this.props.filterText}
					onChange={this.handleFilterTextChange}
					className="search-bar"
        />
      </form>
    );
  }
}

export default SearchBar;