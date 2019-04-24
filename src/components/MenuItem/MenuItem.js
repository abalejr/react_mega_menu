import React, { Component } from 'react';
import MenuDropdown from '../MenuDropdown/MenuDropdown';
import './MenuItem.css';

class MenuItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if ( this.props.hasDropdown ) {
      return (
        <div className="menu-item-wrap">
          <a className="menu-item has-dropdown" href={ this.props.link } >
            <span>{ this.props.name }</span>
          </a>
          <MenuDropdown
            subcategories={ this.props.subcategories }
            featuredImages={ this.props.featuredImages }
          />
        </div>
      );
    } else {
      return (
        <div className="menu-item-wrap">
          <a className="menu-item" href={ this.props.link } >
            <span>{ this.props.name }</span>
          </a>
        </div>
      );
    }
  }
}

export default MenuItem;
