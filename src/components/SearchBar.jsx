import React, { Component } from "react";
import "./searchBar.scss";

export class SearchBar extends Component {
  state = { term: "" };

  onFormSubmit = (event) => {
      event.preventDefault()
      
      this.props.onSubmitProps(this.state.term)
  }

  render() {
    return (
      <div className="search-bar">
        <h1>OzkanTube.</h1>
        <form onSubmit={this.onFormSubmit}>
          <span>Search Video:</span>
          <input type="text" 
          value={this.state.term}
          onChange={(event) => this.setState({term: event.target.value})}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
