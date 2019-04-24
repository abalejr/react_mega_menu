import React, { Component } from 'react';

class MenuItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if ( this.props.hasDropdown ) {
      return (
        <div className="menu-item has-dropdown">
          <a href={ this.props.link } >{ this.props.name }</a>
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
        </div>
      );
    } else {
      return (
        <div className="menu-item">
          <a href={ this.props.link } >{ this.props.name }</a>
        </div>
      );
    }
  }
}

export default MenuItem;
