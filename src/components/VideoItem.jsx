import React, { Component } from "react";
import "./videoItem.scss";

export class VideoItem extends Component {
  render() {
    return (
      <div
        key={this.props.video.etag}
        className="video-item"
        onClick={() => {
          this.props.onVideoSelect(this.props.video);
        }}
      >
        <div className="left">
          <img src={this.props.video.snippet.thumbnails.high.url} alt={this.props.video.snippet.title} />
        </div>
        <div className="right">
          <span>{this.props.video.snippet.title}</span>
        </div>
      </div>
    );
  }
}

export default VideoItem;
