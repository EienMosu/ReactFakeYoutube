import React, { Component } from "react";
import "./player.scss";

export class Player extends Component {
  render() {
    return (
      <div className="player">
        {!this.props.video ? (
          <div>Loading...</div>
        ) : (
          <>
            <div className="player-container">
              <iframe
                title={this.props.video.snippet.title}
                src={`https://www.youtube.com/embed/${this.props.video.id.videoId}?autoplay=1`}
                frameBorder="0"
                allow="autoplay"
              ></iframe>
            </div>
            <div className="info-container">
              <h4>{this.props.video.snippet.title}</h4>
              <p>{this.props.video.snippet.description}</p>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default Player;
