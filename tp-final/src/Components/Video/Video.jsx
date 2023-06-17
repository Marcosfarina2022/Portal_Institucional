import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  return (
    <div className='video' style={{ maxWidth: '500px', maxHeight: '400px', position: 'relative' }}>
      <ReactPlayer
        url='https://www.instagram.com/p/CrYhuq9Mj5R/'
        className='react-player'
        width='100%'
        height='100%'
        controls
        playing
      />
    </div>
  );
}

export default VideoPlayer;
