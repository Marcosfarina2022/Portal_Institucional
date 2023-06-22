import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  return (
    <div
      style={{
        width: 'auto',
        height: '400px',
        paddingBottom: '56.25%',
        position: 'relative',
        borderRadius: '10px',
        overflow: 'hidden'
      }}
    >
      <ReactPlayer
        url='https://www.youtube.com/watch?v=_4QqLyc3HnI'
        className='react-player'
        width='100%'
        height='100%'
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          borderRadius: '10px'
        }}
        controls
        volume={0.4}
      />
    </div>
  );
}

export default VideoPlayer;
