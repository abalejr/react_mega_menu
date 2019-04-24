import React, { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import './SearchPanel.css';

class SearchPanel extends Component {
  render() {
    return (
      <div className={ this.props.collapsed ? 'search-panel collapsed' : 'search-panel' } >
        <div className="search-panel-exit" onClick={ this.props.handleExitClick } ></div>
        <SearchForm />
      </div>
    );
  }
}

export default SearchPanel;
