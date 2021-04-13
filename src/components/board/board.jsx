import React, { useRef } from 'react';
import BoardAddForm from '../board_add_form/board_add_form';
import HomeCard from '../home_card/home_card';
import styles from './board.module.css';

const Board = (props) => {
  const divRef = useRef();
  const menuRef = useRef();

  return(
    <div className={styles.div}>
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
      <div className={styles.board}>
        <BoardAddForm />
      </div>
    </div>
  );
};

export default Board;