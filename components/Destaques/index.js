import React from "react";
import Slider from "react-slick";

const Slide = () => {
 
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

export default Slide