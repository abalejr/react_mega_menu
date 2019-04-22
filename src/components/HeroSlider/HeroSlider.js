import React, { Component } from 'react';
import './HeroSlider.css';
import Slider from "react-slick";

class HeroSlider extends Component {
  settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    fade: true,
    arrows: false
  };
  render() {
    return (
      <Slider {...this.settings} className="hero-slider">
        <div id="one">
        </div>
        <div id="two">
        </div>
      </Slider>
    );
  }
}

export default HeroSlider;
