import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Map from './components/Map.jsx';
import Panel from './components/Panel.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      friends: []
    }
  }

  handleClick(name, location) {
    console.log('I have been clicked!');
    console.log('Name: ' + name);
    console.log('Location: ' + location);

    var geocoder =  new google.maps.Geocoder();
    geocoder.geocode( { 'address': location}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        console.log("location : " + results[0].geometry.location.lat() + " " +results[0].geometry.location.lng());
        var lat = results[0].geometry.location.lat();
        var lng = results[0].geometry.location.lng();

        $.ajax({
          url: '/friend',
          method: 'POST',
          contentType: "application/JSON",
          data: JSON.stringify({name: name, location: location, lat: lat, lng: lng}),
          success: (data) => {
            console.log('POST request from handleClick success!!!');
          },
          error: (err) => {
            console.log('err', err);
          }
        });
            //REFRESHES BROWSER
            window.location.reload();

      } else {
        console.log("Something wrong " + status);
      }
    });

  }

  componentDidMount() {
    //UPON LOAD, ROUTE TO /friends
    $.ajax({
      url: '/friends',
      method: 'GET',
      contentType: "application/JSON",
      success: (data) => {
        var parsedData = JSON.parse(data);
        this.setState({
          friends: parsedData
        });
        // this.setState({
        //   items: data
        // })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (<div>
      <Panel handleClick={this.handleClick.bind(this)}/>
      <Map friends={this.state.friends}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

