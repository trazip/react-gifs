import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: "NUBp5KcV0PJBe"
    };
    this.search('breaking bad');
  }


  search = (query) => {
    giphy({ apiKey: 'T39KKKrUp5926w1XRnJol83oP6oAn1mO', https: true })
      .search({
        q: query,
        rating: 'g',
        limit: 10
      }, (err, res) => {
        this.setState({
          gifs: res.data
        });
      });
  }

  gifClicked = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    const { selectedGifId, gifs } = this.state;
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifClicked={this.gifClicked} gifs={gifs} />
        </div>
      </div>
    );
  }
}

export default App;
