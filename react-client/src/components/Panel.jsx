import React from 'react';

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      location: ''
    }
  }

  handleNameChange(e) {
    console.log('Name input: ' + e.target.value);
    this.setState({name: e.target.value});
  }

  handleLocationChange(e) {
    console.log('Location input: ' + e.target.value);
    this.setState({name: e.target.value});
  }

  handleClick(e) {
    this.props.handleClick();
  }

  render() {
    return (
      <div>
        <h4>Friend Finder</h4>
        <div>
          <input type="text" placeholder="Name" onChange={this.handleNameChange.bind(this)} />
          <input type="text" placeholder="Location" onChange={this.handleLocationChange.bind(this)} />
          <button onClick={this.handleClick.bind(this)}>Submit</button>
        </div>
      </div>)
  }
}

export default Panel;