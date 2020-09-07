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
         
            <img src={`http://www.guiadeitapoa.com.br/assets/img/`} />
                 
        </div>        
      </Slider>
    );
  }
}

export default Slide