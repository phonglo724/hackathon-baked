import './App.css';
import { Component } from 'react';

import ImageBox from "./Components/ImageBox"
import QuotesBox from "./Components/QuotesBox"

const quotesURL = "https://goquotes-api.herokuapp.com/api/v1/all/quotes"

class App extends Component {
  state = {
    quotes: [],
    imageIndex: 0,
    imageList: [
      "http://web.archive.org/web/20150208194357im_/http://www.sweethappylife.com/wp-content/uploads/2011/08/teddy-bear-chllah-1.jpg?a5369e",
      "https://i.pinimg.com/564x/51/db/08/51db084970bf0e77345720dbacb99c91.jpg",
      "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Spumoni-Baked-Alaska_EXPS_THCA19_86684_C02_23_1b.jpg",
      "https://ohiostatefair.com/wp-content/uploads/27.jpg",
      "https://cdn.shopify.com/s/files/1/0362/1653/files/peppa-pig-cake_offender_2084_1024x1024.jpg?v=1584469954",
    ],
  };

  componentDidMount() {
    fetch(quotesURL)
      .then((response) => response.json())
      .then((allquotes) => this.setState({
        quotes: allquotes.quotes.map(quote => quote.text)
      }))
  }

  randomQuote = () => {
    const randomNumber = Math.floor(Math.random() * this.state.quotes.length);
    return this.state.quotes[randomNumber];
  };

  onClickForward = () => {
    if (this.state.imageIndex + 1 === this.state.imageList.length) {
      this.setState({
        imageIndex: 0,
      });
    } else {
      this.setState({
        imageIndex: this.state.imageIndex + 1,
      });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Love Muffins</h1>
        <QuotesBox quotes={this.state.quotes} randomQuote={this.randomQuote} />
        {this.state.imageList.length > 0 ? (
          <ImageBox
            imageIndex={this.state.imageIndex}
            imageList={this.state.imageList}
            onClickForward={this.onClickForward}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
