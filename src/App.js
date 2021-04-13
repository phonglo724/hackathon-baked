import './App.css';
import { Component } from 'react';

import Ugly from './images/27.jpeg'
import ImageBox from "./Components/ImageBox"
import QuotesBox from "./Components/QuotesBox"

const quotesURL = "https://goquotes-api.herokuapp.com/api/v1/all/quotes"

class App extends Component {
  state = {
    allquotes: [],
  };

  componentDidMount() { 
    fetch(quotesURL)
      .then((response) => response.json())
      .then((allquotes) => this.setState({
        allquotes: allquotes
      }))
  };

  const randomQuote = (allquotes) => {
    const randomNumber = Math.floor(
      Math.random() * this.state.allquotes.length);
    return this.state.allquotes[randomNumber];
  };

  console.log(randomQuote(allquotes))

  render() {
    return (
      <div className="App">
        <h1>Baked</h1>
        {/* <QuotesBox />
            <ImageBox /> */}
      </div>
    );
  }
}

export default App;


// image
// quote/lyrics/poetry
// send to friend
