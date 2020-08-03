import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text, img }) => <div><img src={img}/><h2>{text}</h2></div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: -25.4950501,
      lng: -49.4298839
    },
    zoom: 12,
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyA4P-KNX5E_ekjDUQZdJhn5vFOh1B6Qq3U" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={-25.4950501}
            lng={-49.4208839}
            text="My Marker"
            img="https://casadupet.com.br/images/map-pin.png"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;