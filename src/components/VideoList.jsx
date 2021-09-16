import React, { Component } from "react";
import VideoItem from "./VideoItem";
import "./videoList.scss";

export class VideoList extends Component {
  render() {
    return (
      <div className="video-list">
        {this.props.videos.map((video) => (
          <VideoItem key={video.etag} onVideoSelect={this.props.onVideoSelect} video={video} />
        ))}
      </div>
    );
  }
}

export default VideoList;
