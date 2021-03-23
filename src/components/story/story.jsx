import React, { memo } from 'react';
import HomeCard from '../home_card/home_card';
import VideoDetail from '../video_detail/video_detail';
import styles from './story.module.css';

const Story = memo((props) => {
  return(
    <div className={styles.div}>
      <div className={styles.img_div} style={{backgroundImage: `url("images/story2.png")`}}>
        <h1 className={styles.img_text1}>We will find a way.</h1>
        <h1 className={styles.img_text2}>We always have.</h1>
      </div>
      <div className={styles.menu}>
        {
          props.cardsData.map((item, idx) => {
            return <HomeCard item={item} key={`homeCard${item.title}${idx}`} />
          })
        }
      </div>
      <section className={styles.section}>
        <article className={styles.article_story}>
          <p>
            “우린 답을 찾을 거야, 늘 그랬듯이”<br/><br/>
            세계 각국의 정부와 경제가 완전히 붕괴된 미래가 다가온다.
            지난 20세기에 범한 잘못이 전 세계적인 식량 부족을 불러왔고, NASA도 해체되었다.
            이때 시공간에 불가사의한 틈이 열리고, 남은 자들에게는 이 곳을 탐험해 인류를 구해야 하는 임무가 지워진다.
            사랑하는 가족들을 뒤로 한 채 인류라는 더 큰 가족을 위해, 그들은 이제 희망을 찾아 우주로 간다.
            그리고 우린 답을 찾을 것이다. 늘 그랬듯이…
          </p>
        </article>
        <article className={styles.article_video}>
          <VideoDetail src="https://www.youtube.com/embed/vABfjuXZhYY" width="1280" height="720" title="YouTube video player" />
        </article>
        <article className={styles.article_explain}>
          <p>
          인터스텔라는 2014년에 개봉한 미국 영화로 크리스토퍼 놀란 연출, 매튜 매커너히, 앤 해서웨이 주연이다.
          점점 황폐해져가는 지구를 대체할 인류의 터전을 찾기 위해 새롭게 발견된 웜홀을 통해 항성 간(Interstellar) 우주 여행을 떠나는 탐험가들의 모험이 연대기 순으로 그려진다.
          제목인 인터스텔라(Interstellar)는 '~의 중간의, 사이의'를 뜻하는 접두사 'inter-'와 '별의'를 뜻하는 'stellar'의 합성어로, "항성 간의, 성간의"라는 뜻이다.
          </p>
        </article>
      </section>
    </div>
  );
});

export default Story;