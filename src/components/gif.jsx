import React, { Component } from 'react';

class Gif extends Component {
  handleClick = (event) => {
    const { gifClicked } = this.props;
    gifClicked(event.currentTarget.id);
  }

  render() {
    const src = `https://media2.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img id={this.props.id} src={src} alt="" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
