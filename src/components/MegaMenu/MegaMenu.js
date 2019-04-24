import React, { Component } from 'react';
import './MegaMenu.css';

class MegaMenu extends Component {
  render() {
    return (
      <header id="main-navigation">
        <div className="hamburger-menu"></div>
        <div className="logo"></div>
        <div id="PrimaryNav"></div>
        <div className="header-tools">
          <div className="account"><a href="#" >Sign In</a></div>
          <div className="search"></div>
          <div className="cart"><a href="#" >Bag (0)</a></div>
        </div>
      </header>
    );
  }
}

export default MegaMenu;
