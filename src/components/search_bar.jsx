import React, { Component } from 'react';

class SearchBar extends Component {
  handleChange = (event) => {
    const { search } = this.props;
    search(event.currentTarget.value);
  }

  render() {
    return (
      <input type="text" className="form-control form-search" onChange={this.handleChange} />
    );
  }
}

export default SearchBar;
