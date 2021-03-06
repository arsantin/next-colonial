import React, { Component, Fragment } from 'react';
import GoogleMapReact from 'google-map-react';
import { ThemeContext } from '../../context/ThemeContext'



const AnyReactComponent = ({ text, img }) => <div><img src={img} /><h2>{text}</h2></div>;

const SimpleMap = (props) => {
  
  const defaultProps = {
    center: {
      lat: -26.091249,
      lng: -48.603640
    },
    zoom: 12,
  }



    return (
      
      <>
        <ThemeContext.Consumer>{(context) => {
          const {isLightTheme, light, dark} = context;
          const theme = isLightTheme ? light : dark;
          
          return (   
             <>
           
            <h1>MAPA</h1>
            <div style={{ height: '550px', width: '100%', padding: '30px', background: theme.ui, color: theme.syntax }} className="mapa">
              <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyA4P-KNX5E_ekjDUQZdJhn5vFOh1B6Qq3U" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              >
                {props.cafes.map((cada)=>{
                  
                   <AnyReactComponent
                      key={cada._id}
                      lat="-25.45646"
                      lng="42.42343"
                      text="ok"
                      img="https://curitibacolonial.com.br/cake.png"
                    />
                }
              )}
                                
                

              </GoogleMapReact>
            </div>           
            </>
      )
        }}

        </ThemeContext.Consumer>
      </>
    );
 
}

export default SimpleMap;