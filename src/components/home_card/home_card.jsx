import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './home_card.module.css';

const HomeCard = ({item}) => {
  const [mouseOnLinkStory, setMouseOnLinkStory] = useState(false);
  const [mouseOnLinkActors, setMouseOnLinkActors] = useState(false);
  const [mouseOnLinkMusic, setMouseOnLinkMusic] = useState(false);
  const [mouseOnLinkEtc, setMouseOnLinkEtc] = useState(false);
  const [mouseOnLinkBoard, setMouseOnLinkBoard] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  const mouseHover = (pathname, img) => {
    if('' === imageUrl){
      setImageUrl(img);
    }else{
      setImageUrl('');
    };
    switch(pathname){
      case 'story':
        setMouseOnLinkStory(!mouseOnLinkStory);
        break;
      case 'actors':
        setMouseOnLinkActors(!mouseOnLinkActors);
        break;
      case 'music':
        setMouseOnLinkMusic(!mouseOnLinkMusic);
        break;
      case 'etc':
        setMouseOnLinkEtc(!mouseOnLinkEtc);
        break;
      case 'board':
        setMouseOnLinkBoard(!mouseOnLinkBoard);
        break;
      default:
        break;
    }
  }

  return (
    <Link className={styles.link} to={item.pathname}>
      <div
        className={styles.card}
        onMouseEnter={()=>{mouseHover(item.pathname, item.img)}}
        onMouseOut={()=>{mouseHover(item.pathname, item.img)}}
        style={{backgroundImage:`url(${imageUrl})`,
        backgroundPosition: `${item.position}`}}
      >
        {item.title}
      </div>
    </Link>
  )
};

export default HomeCard;