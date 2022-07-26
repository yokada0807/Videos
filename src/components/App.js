import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDeail from './VideoDetail'

class App extends React.Component {

  state = {
    videos: [], selectedVideo: null
  }

  componentDidMount() {
    this.onTermSubmit('meditation')
  }

  onTermSubmit = async (term) => {
    console.log(term)
    const response = await youtube.get('./search', {
      params: {
        q: term,
        // part: 'snippet',
      }
    });
    console.log(response);

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })
  }

  onVideoSelect = (video) => {
    console.log("from the app", video);
    this.setState({selectedVideo: video})
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            {/* Width of the column out of 16 rows. Remember bootstrap. */}
            <div className="eleven wide column">
              {/* I have {this.state.videos.length} videos . */}
              <VideoDeail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;