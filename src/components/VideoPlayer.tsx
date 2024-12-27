import React from 'react';

const VideoPlayer = () => {
  return (
    <div className="video-container">
      {/* <video className='rounded-2xl' autoPlay loop  width="100%" height="auto" poster="/videos/video-poster.jpg"> */}
      <video className='rounded-2xl'  id="myVideo" autoPlay  preload="none" loop muted playsInline>
        <source src="/vedio/bannerVedio.mp4" type="video/mp4" />
        <source src="/vedio/bannerVedio.mp4" type="video/webm" />
        <source src="/vedio/bannerVedio.mp4" type="video/ogv"></source>
        <p>Your browser does not support HTML5 video. Please update your browser!</p>
      </video>
    </div>
  );
};

export default VideoPlayer;
