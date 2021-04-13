import React, { useRef, useState } from 'react';
import BoardFormButton from '../board_form_button/board_form_button';
import styles from './board_add_form.module.css';


const BoardAddForm = (props) => {
  const formRef = useRef();
  const star1Ref = useRef();
  const star2Ref = useRef();
  const star3Ref = useRef();
  const star4Ref = useRef();
  const star5Ref = useRef();
  const nameRef = useRef();
  const messageRef = useRef();
  const [starPoint, setStarPoint] = useState(3);

  const changeStar = (ref) => {
    let name = ref.current.name;
    const changeLength = parseInt(name.split('star')[1]);
    for(let i=0; i<5; i++){
      if(changeLength >= i+1){
        formRef.current.childNodes[0].childNodes[i].src = 'images/lightstar.png';
      }else{
        formRef.current.childNodes[0].childNodes[i].src = 'images/darkstar.png';
      }
    }
    setStarPoint(changeLength);
  }

  return (
    <form ref={formRef} className={styles.form}>
      <h2>영화 인터스텔라 대한 생각을 공유해보세요.</h2>
      <div className={styles.form_top}>
        <img ref={star1Ref} src="images/lightstar.png" alt="star point" name="star1" onClick={() => {changeStar(star1Ref);}} />
        <img ref={star2Ref} src="images/lightstar.png" alt="star point" name="star2" onClick={() => {changeStar(star2Ref);}} />
        <img ref={star3Ref} src="images/lightstar.png" alt="star point" name="star3" onClick={() => {changeStar(star3Ref);}} />
        <img ref={star4Ref} src="images/darkstar.png" alt="star point" name="star4" onClick={() => {changeStar(star4Ref);}} />
        <img ref={star5Ref} src="images/darkstar.png" alt="star point" name="star5" onClick={() => {changeStar(star5Ref);}} />
        <label htmlFor="AddFormName">작성자</label>
        <input ref={nameRef} className={styles.input} type="text" name="name" id="AddFormName" />
      </div>
      <label htmlFor="AddFormMessage">영화평</label>
      <div className={styles.form_bottom}>
        <textarea ref={messageRef} className={styles.textarea} name="message" id="AddFormMessage" />
        <BoardFormButton />
      </div>
      
    </form>
  );
};

export default BoardAddForm;