import React, { Component } from 'react';
import './SearchPanel.css';

class SearchPanel extends Component {
  render() {
    return (
      <div className={ this.props.collapsed ? 'search-panel collapsed' : 'search-panel' } >
        <div className="search-panel-exit" onClick={ this.props.handleExitClick } ></div>
      </div>
    );
  }
}

export default SearchPanel;
