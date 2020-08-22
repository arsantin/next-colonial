import React, { Component, Fragment } from 'react';
import GoogleMapReact from 'google-map-react';
import { ThemeContext } from '../../context/ThemeContext'



const AnyReactComponent = ({ text, img }) => <div><img src={img} /><h2>{text}</h2></div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: -26.091249,
      lng: -48.603640
    },
    zoom: 12,
  }

  render() {

    return (
      <>
        <ThemeContext.Consumer>{(context) => {
          const {isLightTheme, light, dark} = context;
          const theme = isLightTheme ? light : dark;
          return (
            <>
            
            <h1>MAPA</h1>
            <div style={{ height: '80vh', width: '100%', padding: '30px', background: theme.ui, color: theme.syntax }} className="mapa">
              <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyA4P-KNX5E_ekjDUQZdJhn5vFOh1B6Qq3U" }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
              >
                {
                  this.props.cafes.map((pin) => {
                    return <AnyReactComponent
                      key={pin._id}
                      lat={pin.geometry.coordinates[0]}
                      lng={pin.geometry.coordinates[1]}
                      text={pin.nome}
                      img="https://curitibacolonial.com.br/cake.png"
                    />
                  })
                }

              </GoogleMapReact>
            </div>           
            </>
      )
        }}

        </ThemeContext.Consumer>
      </>
    );
  }
}

export default SimpleMap;