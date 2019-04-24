import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange = e => {
    this.setState({value: e.target.value});
  }

  handleSubmit = e => {
    alert('There\'s nothing to find here, but you searched for: \n\n' + this.state.value);
    e.preventDefault();
  }

  render() {
    return (
      <form className="search-panel-form" onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Find your new look" aria-label="Search" />
        <input type="submit" value="Search" />
      </form>
    );
  }
}

export default SearchForm;
