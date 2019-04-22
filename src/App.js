import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeroSlider from './components/HeroSlider/HeroSlider';
import MegaMenu from './components/MegaMenu/MegaMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MegaMenu />
        <HeroSlider />
      </div>
    );
  }
}

export default App;
