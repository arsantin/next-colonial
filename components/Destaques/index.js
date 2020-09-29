import React from "react";
import Slider from "react-slick";
import styled from "styled-components"
import Cartas from "../Cartas"

const Wrapper = styled.div`
  max-width: 1040px;
  flex-basis: 100%;
  margin: 80px auto;
  .slick-slide{
    max-width: 300px;
  }
`

const Destaque = (props) => {
 
    var settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 1120,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    console.log("props", props)
    return (
      
      <Wrapper>
        <h2>DESTAQUES</h2>
      <Slider {...settings}> 
      {props.cafes.map((cafe) => {        
          {
            if(cafe.fotodestaque){
              return(
              <div className="cada" key={cafe._id}>
              <Cartas key={cafe._id} cafe={cafe}/>
              </div>
              )
            }
          }
      })}             
      </Slider>
      <div className="btn">VER TODO O COMÉRCIO</div>
      </Wrapper>
    );  
}

export default Destaque