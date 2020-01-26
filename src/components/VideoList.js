import React from 'react';
import VideoItem from './VideoIItem';

const VideoList = ({videos}) => {

  const renderedList = videos.map( video => {
    return <VideoItem  video={video}/>;
  });
  // props.videos
  // {} is supposed to be props?
  return (
    <div className="ui relaxed divided list">
      {renderedList}
    </div>
  )
};

export default VideoList;