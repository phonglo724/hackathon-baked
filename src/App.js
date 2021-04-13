import './App.css';
import { Component } from 'react';

import Ugly from './images/27.jpeg'

const quotesURL = "https://goquotes-api.herokuapp.com/api/v1/all/quotes"


class App extends Component {

  state = {
    quote: []
  }

  componentDidMount() {
    fetch(quotesURL)
      .then(response => response.json())
      .then((allquotes) => console.log(allquotes.quotes[0].text))
      // this.setState({
      //   quote: text 
      // }))
  }

  // handleQuotes(quotes) {
  //   this.setState({quote: quotes[0]})
  // }

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
