import React, { Component } from "react";
import youtube from "./api/youtube";
import Player from "./components/Player";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";

export class App extends Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onSubmitProps("cyberpunk 2077 soundtrack")
  }

  onSubmitProps = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });

    window.scrollTo(10, 0);
  };

  render() {
    return (
      <div>
        <SearchBar onSubmitProps={this.onSubmitProps} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
        <Player video={this.state.selectedVideo} />
      </div>
    );
  }
}

export default App;
