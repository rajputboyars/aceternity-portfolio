import React from 'react';

const VideoPlayer = () => {
  return (
    <div className="video-container">
      <video controls width="100%" height="auto" poster="/videos/video-poster.jpg">
        <source src="/videos/sample.mp4" type="video/mp4" />
        <source src="/videos/sample.webm" type="video/webm" />
        <p>Your browser does not support HTML5 video. Please update your browser!</p>
      </video>
    </div>
  );
};

export default VideoPlayer;
