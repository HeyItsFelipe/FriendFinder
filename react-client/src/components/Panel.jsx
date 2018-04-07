import React from 'react';

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({name: e.value});
  }

  render() {
    return (
      <div>
        <h4>Friend Finder</h4>
        <div>
          <input type="text" placeholder="Name" onChange={this.handleChange.bind(this)}/>
          <input type="text" placeholder="Location" />
          <button>Submit</button>
        </div>
      </div>)
  }
}

export default Panel;