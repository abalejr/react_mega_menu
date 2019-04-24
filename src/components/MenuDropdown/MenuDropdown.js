import React, { Component } from 'react';
import './MenuDropdown.css';

class MenuDropdown extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="menu-dropdown">
        <div className="menu-subcategory-section">
          {this.props.subcategories.map(function( subcategory, i ) {
            return (
              <a className='menu-subcategory' href={ subcategory.link } key={ i } >
                { subcategory.label }
              </a>
            );
          })}
        </div>
        {this.props.featuredImages.map(function( featuredImage, i ) {
          return (
            <div className="menu-featured-wrap" key={ i } >
              <a className="menu-featured-link" href={ featuredImage.link } >
                <img className="menu-featured-img" src={ featuredImage.img } />
                <p className="menu-featured-label">
                  { featuredImage.label }
                </p>
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MenuDropdown;
