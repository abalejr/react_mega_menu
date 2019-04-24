import React, { Component } from 'react';

class MenuItem extends Component {
  constructor(props) {
    super(props);
  }
  generateSubcategories = (subcategoryList) => {
    for ( var i = 0, max = subcategoryList.length; i < max; i++ ) {
      let subcategory = subcategoryList[i];
      return (
        <a className='menu-subcategory' href={ subcategory.link } >
          { subcategory.label }
        </a>
      );
    }
  }
  generateFeaturedImages = (featuredImageList) => {
    for ( var i = 0, max = featuredImageList.length; i < max; i++ ) {
      let featuredImage = featuredImageList[i];
      return (
        <div className="menu-featured-wrap">
          <a className="menu-featured-link" href={ featuredImage.link } >
            <img className="menu-featured-img" src={ featuredImage.img } />
            <p className="menu-featured-label">
              { featuredImage.label }
            </p>
          </a>
        </div>
      );
    }
  }
  render() {
    if ( this.props.hasDropdown ) {
      return (
        <div className="menu-item has-dropdown">
          <a href={ this.props.link } >{ this.props.name }</a>
          <div className="menu-dropdown">
            <div className="menu-subcategory-section">
              { this.generateSubcategories( this.props.subcategories ) }
            </div>
            { this.generateFeaturedImages( this.props.featuredImages ) }
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
