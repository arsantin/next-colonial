import React from "react";
import Slider from "react-slick";

class Slide extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <img src="http://lorempixel.com/g/650/350/"/>
        </div>
        <div>
          <img src="http://lorempixel.com/g/650/350/"/>
        </div>
        <div>
          <img src="http://lorempixel.com/g/650/350/"/>
        </div>
        <div>
          <img src="http://lorempixel.com/g/650/350/"/>
        </div>
        <div>
          <img src="http://lorempixel.com/g/650/350/"/>
        </div>        
      </Slider>
    );
  }
}

export default Slide