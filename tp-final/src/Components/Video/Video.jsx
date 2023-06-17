import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  return (
    <div className='video' style={{ width: 'auto', height: '400px' }}>
      <ReactPlayer
        url='https://www.youtube.com/watch?v=_4QqLyc3HnI'
        className='react-player'
        width='100%'
        height='100%'
        controls
        playing
        volume={0.8}
      />
    </div>
  );
}

export default VideoPlayer;
