import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeroSlider from './components/HeroSlider/HeroSlider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeroSlider />
      </div>
    );
  }
}

export default App;
