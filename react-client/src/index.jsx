import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Map from './components/Map.jsx';
import Panel from './components/Panel.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  // this.handleClick = this.handleClick.bind(this);

  handleClick() {
    console.log('I have been clicked!');
  }

  componentDidMount() {
    $.ajax({
      url: '/items',
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (<div>
      <Panel name="Jo" handleClick={this.handleClick.bind(this)}/>
      <Map />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

//AIzaSyBGC4u9mqouuWu2JyVz60Kk2iiuptGJy0g