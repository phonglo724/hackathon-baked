import './App.css';
import { Component } from 'react';
import Ugly from './images/27.jpeg'

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>title</h1>
        <p>quotes</p>
        <img src={Ugly} />
      </div>
    );
  }
}

export default App;

// image
// quote/lyrics/poetry
// send to friend
