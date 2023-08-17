import React from 'react';
import ReactPlayer from 'react-player';
import { Card } from 'react-bootstrap';
import './video.css';
const VideoPlayer = () => {
  return (
    <div className='contenedor'>
      <Card className='cardVideo'>
        <Card.Body className='cardBodyVideo'>
          <Card.Title className='cardTitleVideo'>
            <Card.Subtitle className='cardSubtitleVideo'>
              <ReactPlayer
                url='https://www.youtube.com/watch?v=_4QqLyc3HnI'
                className='react-player'
                width={'auto'}
                controls
                volume={0.4}
              />
            </Card.Subtitle>
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}

export default VideoPlayer;
