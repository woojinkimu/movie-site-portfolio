import React from 'react';
import HomeCard from '../home_card/home_card';
import VideoDetail from '../video_detail/video_detail';
import styles from './music.module.css';

const Music = (props) => {
  return(
    <div className={styles.div}>
      <div className={styles.img_div} style={{backgroundImage: `url("images/music_bg2.jpg")`}}>
        <h1 className={styles.img_text1}>Love is the one thing</h1>
        <h1 className={styles.img_text2}>that transcends time and space.</h1>
      </div>
      <div className={styles.menu}>
        {
          props.cardsData.map((item, idx) => {
            return <HomeCard item={item} key={`homeCard${item.title}${idx}`} />
          })
        }
      </div>
      <section className={styles.section}>
        <article className={styles.article}>
          <div>
            <h2>Record Producer</h2>
            <h3>Hans Florian Zimmer</h3>
          </div>
          <picture>
            <img src="images/zimmer.jpg" alt=""/>
          </picture>
        </article>
        <article>
          <h1 className={styles.h1}>Hans Zimmer - First Step | 8D Audio</h1>
          <VideoDetail src="https://www.youtube.com/embed/5nz6XwMhp3U" title="Hans Zimmer - First Step | 8D Audio" />
        </article>
        <article>
          <h1 className={styles.h1}>Interstellar Official Soundtrack | Full Album – Hans Zimmer | WaterTower</h1>
          <VideoDetail src="https://www.youtube.com/embed/YF1eYbfbH5k" title="Interstellar Official Soundtrack | Full Album – Hans Zimmer | WaterTower" />
        </article>
          Dreaming Of The Crash
          Cornfield Chase
          Dust
          Day One
          Stay
          Message From Home
          The Wormhole
          Mountains
          Afraid Of Time
          A Place Among The Stars
          Running Out
          I'm Going Home
          Coward
          Detach
          S.T.A.Y.
          Where We're Going
          First Step
          Flying Drone
          Atmospheric Entry
          No Need To Come Back
          Imperfect Lock
          No Time For Caution
          What Happens Now?

          0:00
          3:55
          6:02
          11:43
          15:03
          21:56
          23:36
          25:07
          28:46
          31:19
          34:45
          36:43
          42:32
          50:58
          57:41
          1:04:04
          1:11:45
          1:13:33
          1:15:26
          1:17:07
          1:21:42
          1:28:36
          1:32:42
      </section>
    </div>
  );
};

export default Music;