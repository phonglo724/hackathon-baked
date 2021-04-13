import './App.css';
import { Component } from 'react';

import ImageBox from "./Components/ImageBox"
// import QuotesBox from "./Components/QuotesBox"

const quotesURL = "https://goquotes-api.herokuapp.com/api/v1/all/quotes"

class App extends Component {
  state = {
    quotes: [],
  };

  componentDidMount() {
    fetch(quotesURL)
      .then((response) => response.json())
      .then((allquotes) =>
        this.setState({
          quotes: allquotes.quotes
        })
      );
  }

  randomQuote = () => {
    const randomNumber = Math.floor(
      Math.random() * this.state.quotes.length);
    return this.state.quotes[randomNumber];
  };

  render() {
    console.log(this.randomQuote())
    return (
      <div className="App">
        <h1>Baked</h1>
        {/* <QuotesBox allquotes={this.state.allquotes} /> */}
        <ImageBox />
      </div>
    );
  }
}

export default App;
