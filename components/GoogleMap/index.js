import React, { Component, Fragment } from 'react';
import GoogleMapReact from 'google-map-react';
import { DatePicker } from 'antd';


const AnyReactComponent = ({ text, img }) => <div><img src={img}/><h2>{text}</h2></div>;

class SimpleMap extends Component{
  static defaultProps = {
    center: {
      lat: -25.4950501,
      lng: -49.4298839
    },
    zoom: 12,
  }

  render() {
    
    return (
      <>
    
    <h1>MAPA</h1>
      <DatePicker/>
      <div style={{ height: '80vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyA4P-KNX5E_ekjDUQZdJhn5vFOh1B6Qq3U" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {
            this.props.cafes.map((pin)=> {
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
    );
  }
}

export default SimpleMap;