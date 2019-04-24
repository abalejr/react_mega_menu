import React, { Component } from 'react';
import MenuItem from '../MenuItem/MenuItem';
import './PrimaryNav.css';

const menuItemList = [
  {
    name: 'New Arrivals',
    hasDropdown: false,
    subcategories: [],
    featuredImages: [],
    link: 'https://abalejr.github.io/react_mega_menu/new_arrivals'
  },
  {
    name: 'Clothing',
    hasDropdown: true,
    subcategories: [
      {
        label: 'New Arrivals',
        link: 'https://abalejr.github.io/react_mega_menu/new_arrivals'
      },
      {
        label: 'Fall \'18',
        link: 'https://abalejr.github.io/react_mega_menu/fall_2018'
      },
      {
        label: 'Bodysuits',
        link: 'https://abalejr.github.io/react_mega_menu/bodysuits'
      },
      {
        label: 'Bralettes',
        link: 'https://abalejr.github.io/react_mega_menu/bralettes'
      },
      {
        label: 'Dresses',
        link: 'https://abalejr.github.io/react_mega_menu/dresses'
      },
      {
        label: 'Jackets',
        link: 'https://abalejr.github.io/react_mega_menu/jackets'
      },
      {
        label: 'Pants & Shorts',
        link: 'https://abalejr.github.io/react_mega_menu/pants_shorts'
      },
      {
        label: 'Skirts',
        link: 'https://abalejr.github.io/react_mega_menu/skirts'
      },
      {
        label: 'Tees',
        link: 'https://abalejr.github.io/react_mega_menu/basic_tees'
      },
      {
        label: 'Tops',
        link: 'https://abalejr.github.io/react_mega_menu/tops'
      },
      {
        label: 'Sweaters',
        link: 'https://abalejr.github.io/react_mega_menu/sweaters'
      }
    ],
    featuredImages: [
      {
        img: require('../../assets/product_image.jpg'),
        label: 'Shop: Basic Tees',
        link: 'https://abalejr.github.io/react_mega_menu/basic_tees'
      },
      {
        img: require('../../assets/product_image_1.jpg'),
        label: 'Shop: Best-selling Tops',
        link: 'https://abalejr.github.io/react_mega_menu/best_selling_tops'
      },
      {
        img: require('../../assets/product_image_2.jpg'),
        label: 'Shop: Statement Pants',
        link: 'https://abalejr.github.io/react_mega_menu/statement_pants'
      }
    ],
    link: 'https://abalejr.github.io/react_mega_menu/clothing'
  },
  {
    name: 'Swimwear',
    hasDropdown: true,
    subcategories: [
      {
        label: 'Bikini Tops',
        link: 'https://abalejr.github.io/react_mega_menu/bikini_tops'
      },
      {
        label: 'Bikini Bottoms',
        link: 'https://abalejr.github.io/react_mega_menu/bikini_bottoms'
      },
      {
        label: 'One Piece',
        link: 'https://abalejr.github.io/react_mega_menu/one_piece_swimwear'
      },
      {
        label: 'Cover Ups',
        link: 'https://abalejr.github.io/react_mega_menu/cover_ups'
      }
    ],
    featuredImages: [
      {
        img: require('../../assets/product_image_3.jpg'),
        label: 'Trend: Layer Your Bikini',
        link: 'https://abalejr.github.io/react_mega_menu/trend_layer_bikini'
      },
      {
        img: require('../../assets/product_image_4.jpg'),
        label: 'Trend: Knit Swimwear',
        link: 'https://abalejr.github.io/react_mega_menu/trend_knit_swimwear'
      }
    ],
    link: 'https://abalejr.github.io/react_mega_menu/new_arrivals'
  }
]

class PrimaryNav extends Component {
  render() {
    return (
      <div id="PrimaryNav" className="primary-nav">
        {menuItemList.map(function( menuItem, i ) {
          return (
            <MenuItem
              name={ menuItem.name }
              hasDropdown={ menuItem.hasDropdown }
              subcategories={ menuItem.subcategories }
              featuredImages={ menuItem.featuredImages }
              link={ menuItem.link }
              key={ i }
            />
          );
        })}
      </div>
    );
  }
}

export default PrimaryNav;
