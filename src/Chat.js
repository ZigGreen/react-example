import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { msgs: []};
  componentDidMount() {
    const socket = global.io('localhost:3001');
    //var socket = io('damp-caverns-25183.herokuapp.com');

    const showMessage = msg => this.setState({ msgs: [msg, ...this.state.msgs] });

    socket.on('chat message', showMessage);
    socket.on('chat messages', msg => msg.map(showMessage));
  }

  render() {
    return (
      <div >
        {this.state.msgs.map(x => (
          <div>{x.text}</div>
        ))}
      </div>
    );
  }
}

export default App;
