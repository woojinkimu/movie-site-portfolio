import React from 'react';
import HomeCard from '../home_card/home_card';
// import Header from '../header/header';
import styles from './home.module.css';

const Home = (props) => {

  return (
    <main className={styles.home}>
      <h1 className={styles.title}>
        I&nbsp;&nbsp;&nbsp;
        N&nbsp;&nbsp;&nbsp;
        T&nbsp;&nbsp;&nbsp;
        E&nbsp;&nbsp;&nbsp;
        R&nbsp;&nbsp;&nbsp;
        S&nbsp;&nbsp;&nbsp;
        T&nbsp;&nbsp;&nbsp;
        E&nbsp;&nbsp;&nbsp;
        L&nbsp;&nbsp;&nbsp;
        L&nbsp;&nbsp;&nbsp;
        A&nbsp;&nbsp;&nbsp;R
      </h1>
      <div className={styles.audio_wrapper}>
        <audio className={styles.audio} controls loop src="Hans-Zimmer-First-Step.mp3" />
      </div>
      <div className={styles.section_wrapper}>
        <section className={styles.section}>
          <div className={styles.rail}>  
            {
              props.cardsData.map((item, idx) => {
                return <HomeCard item={item} key={`homeCard${item.title}${idx}`} />
              })
            }
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;