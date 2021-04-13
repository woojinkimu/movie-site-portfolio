import React, { useCallback, useEffect, useRef, useState } from 'react';
import HomeCard from '../home_card/home_card';
import styles from './actors.module.css';

const Actors = (props) => {

  const divRef = useRef();
  const menuRef = useRef();
  const railRef = useRef();
  const [railHeight, setRailHeight] = useState('100vh');
  const [isOverflow, setIsOverflow] = useState(false);

  const fixScroll = useCallback(([entry]) => {
    if(entry.isIntersecting) {
      setIsOverflow(true);
    }else{
      setIsOverflow(false);
    }
  });

  useEffect(() => {
    let observer;
    const { current } = railRef;

    setRailHeight(divRef.current.offsetHeight + (window.innerHeight - divRef.current.offsetHeight - (divRef.current.offsetHeight / 3)));
    // console.log(railRef);
    
    if (current) {
      observer = new IntersectionObserver(fixScroll, { threshold: 0.9 });
      observer.observe(current);
      
      return () => observer && observer.disconnect();
    };
  }, [fixScroll]);

  return(
    <div className={styles.div}>
      {/* 첫화면 */}
      <div className={styles.img_div} style={{backgroundImage: `url("images/stay.png")`}} ref={divRef}>
        <h1 className={styles.img_text1}>What ever can happen,</h1>
        <h1 className={styles.img_text2}>will happen.</h1>
      </div>
      <div className={styles.menu} ref={menuRef}>
        {
          props.cardsData.map((item, idx) => {
            return <HomeCard item={item} key={`homeCard${item.title}${idx}`} />
          })
        }
      </div>
      <div className={styles.rail} style={{height: railHeight+'px', overflowY: isOverflow ? 'scroll' : 'hidden'}} ref={railRef}>
      {/* <div className={styles.rail} style={{height: railHeight+'px', overflowY: isOverflow ? 'scroll' : 'hidden', backgroundImage: `url("images/actors_bg.jpg")`, backgroundSize: "cover"}} ref={railRef}> */}
        {/* 감독 */}
        <section style={{height: railHeight+'px'}}>
          <article>
            <h2>Director</h2>
            <div>
              <h3>Christopher Nolan</h3>
              <picture>
                <img className={styles.img} src="images/director1_1.jpg" alt=""/>
              </picture>
            </div>
          </article>
        </section>
        {/* 배우들 */}
        <section style={{height: railHeight+'px'}}>
          <article>
            <h2>Actor</h2>
            <div>
              <h3>Matthew McConaughey</h3>
              <picture>
                <img className={styles.img} src="images/actor1_1.jpg" alt=""/>
              </picture>
            </div>
          </article>
        </section>
        <section style={{height: railHeight+'px'}}>
          <article>
            <h2>Actress</h2>
            <div>
              <h3>Anne Hathaway</h3>
              <picture>
                <img className={styles.img} src="images/actor2_2.jpg" alt=""/>
              </picture>
            </div>
          </article>
        </section>
        <section style={{height: railHeight+'px'}}>
          <article>
            <h2>Actor</h2>
            <div>
              <h3>Michael Caine</h3>
              <picture>
                <img className={styles.img} src="images/actor3_1.jpg" alt=""/>
              </picture>
            </div>
          </article>
        </section>
        <section style={{height: railHeight+'px'}}>
          <article>
            <h2>Actress</h2>
            <div>
              <h3>Jessica Chastain</h3>
              <picture>
                <img className={styles.img} src="images/actor4_1.jpg" alt=""/>
              </picture>
            </div>
          </article>
        </section>
        <section style={{height: railHeight+'px'}}>
          <article>
            <h2>Actress</h2>
            <div>
              <h3>Mackenzie Christine Foy</h3>
              <picture>
                <img className={styles.img} src="images/actor5_1.jpg" alt=""/>
              </picture>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Actors;