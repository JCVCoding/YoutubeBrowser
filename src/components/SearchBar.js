import "./SearchBar.css";
import React from "react";

class SearchBar extends React.Component {
  state = { searchTerm: "" };

  onInputChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <div className="ui icon input">
              <input
                type="text"
                value={this.state.searchTerm}
                onChange={this.onInputChange}
              />
              <i onClick={this.onFormSubmit} className="circular search link icon" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
