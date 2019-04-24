import React, { Component } from 'react';
import './reset.css';
import './App.css';
import HeroSlider from './components/HeroSlider/HeroSlider';
import MegaMenu from './components/MegaMenu/MegaMenu';
import SearchPanel from './components/SearchPanel/SearchPanel';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { searchCollapsed: true };
  }
  handleSearchClick = e => {
    this.setState( { searchCollapsed: false } );
  }
  handleExitClick = e => {
    this.setState( { searchCollapsed: true } );
  }
  render() {
    return (
      <div className="App">
        <SearchPanel collapsed={ this.state.searchCollapsed } handleExitClick={ this.handleExitClick } />
        <MegaMenu handleSearchClick={ this.handleSearchClick } />
        <HeroSlider />
      </div>
    );
  }
}

export default App;
