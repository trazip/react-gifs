import React, { Component } from 'react';

import Gif from './gif';

class GifList extends Component {
  renderList = () => {
    const { gifs, gifClicked } = this.props;
    return gifs.map(gif => <Gif id={gif.id} key={gif.id} gifClicked={gifClicked} />);
  }

  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}

export default GifList;
