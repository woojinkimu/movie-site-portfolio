import React from 'react';
import VideoDetail from '../video_detail/video_detail';

const Music = (props) => {
  return(
    <VideoDetail
      src="https://www.youtube.com/embed/5nz6XwMhp3U"
      width="1280" height="720" title="Hans Zimmer - First Step | 8D Audio"
    />
  );
};

export default Music;