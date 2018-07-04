import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { MarkerWithLabel } from 'react-google-maps/lib/components/addons/MarkerWithLabel';

class Map extends Component {
   render() {
   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 37.697948, lng: -97.314835 } }
        defaultZoom = { 4 }
      >

      {this.props.friends.map(friend =>
        <MarkerWithLabel key={friend._id}
          position={{ lat: friend.lat, lng: friend.lng }}
          labelAnchor={new google.maps.Point(0, 0)}
          labelStyle={{backgroundColor: "white", fontSize: "12px", padding: "5px"}}
        >
        <div>{friend.name}</div>
        </MarkerWithLabel>
      )}


      </GoogleMap>
   ));
   console.log('Entered here...');
   console.log(this.props.friends);
   console.log(Array.isArray(this.props.friends));
   console.log(this.props.friends);
   return(
      <div>
        <GoogleMapExample
          containerElement={ <div style={{ height: `80vh`, width: '100%' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
};
export default Map;
