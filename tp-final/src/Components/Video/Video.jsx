import React from "react";
import ReactPlayer from "react-player";
import './video.css';
const VideoPlayer = () => {
  return (
    <div className="container-videoPlayer">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=_4QqLyc3HnI"
        className="react-player"
        controls
        volume={0.4}
      />
    </div>
  );
};

export default VideoPlayer;
