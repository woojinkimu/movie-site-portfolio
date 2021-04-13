import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({src, title}) => {

  return(
    <section className={styles.detail}>
      <iframe width="100%" height="100%" title={title}
        src={src} frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
      </iframe>
    </section>
  )
};

export default VideoDetail;