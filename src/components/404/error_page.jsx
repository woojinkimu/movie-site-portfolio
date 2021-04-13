import React from 'react';
import styles from './error_page.module.css';

const ErrorPage = (props) => {

  return(
    <div className={styles.error_page}>
      <div className={styles.bg_cover} style={{width: "100vw", height: "100vh", backgroundImage: "url(images/404error.jpg)", backgroundSize: "cover"}}></div>
      <div className={styles.bg} style={{width: "100vw", height: "100vh", backgroundImage: "url(images/404error.jpg)", backgroundSize: "cover"}}></div>
      <div className={styles.info_text}>
        <h1 className={styles.text1}>404</h1>
        <h1 className={styles.text2}>Page Not Found.</h1>
        <h1 className={styles.text3}>Sorry, that page can't be found.</h1>
      </div>
      <img className={styles.img} src="images/indu.png" alt=""/>
    </div>
    // <div className={styles.bg} style={{width: "100vw", height: "100vh", backgroundImage: "url(images/404error.jpg)", backgroundSize: "cover"}}>
    //   <div className={styles.info_text}>
    //     <h1 className={styles.text1}>404</h1>
    //     <h1 className={styles.text2}>Page Not Found.</h1>
    //     <h1 className={styles.text3}>Sorry, that page can't be found.</h1>
    //   </div>
    //   <img className={styles.img} src="images/indu.png" alt=""/>
    // </div>
  )
};

export default ErrorPage;

// import React, { useEffect, useState } from 'react';
// import styled, { keyframes } from 'styled-components';
// import styles from './error_page.module.css';
// import indu from '../../common/images/indu.png';

// const ErrorPage = (props) => {
//   const [mgLeft, setMgLeft] = useState(0);
//   const [mgTop, setMgTop] = useState(0);
//   const [mgLeftNew, setMgLeftNew] = useState(200);
//   const [mgTopNew, setMgTopNew] = useState(200);

//   useEffect(() => {
//     const innerWidth = window.innerWidth;
//     const innerHeight = window.innerHeight;
//     setInterval(() => {
//       const left = getRandomInt(mgLeft, innerWidth);
//       const top = getRandomInt(mgTop, innerHeight);
//       setMgLeft(mgLeftNew);
//       setMgTop(mgTopNew);
//       setMgLeftNew(left - (innerWidth / 10));
//       setMgTopNew(top - (innerHeight / 10));
//     }, 7000);
//   }, []);

//   const getRandomInt = (min, max) => {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     // console.log(Math.floor(Math.random() * (max - min)) + min);
//     return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
//   }

//   const infiniteSpin = keyframes`
//     0% {
//       margin-left: ${mgLeft}px;
//       margin-top: ${mgTop}px;
//       transform: rotate(0deg);
//     }
//     100% {
//       margin-left: ${mgLeftNew}px;
//       margin-top: ${mgTopNew}px;
//       transform: rotate(360deg);
//     }
//   `;

//   const img = styled.img.attrs({
//     src: indu
//   });

//   const SpinImg = styled.div`
//     width: 10vw;
//     height: 10vw;
//     background-image: url("../../common/images/indu.png");
//     animation: ${infiniteSpin} 7000ms linear infinite;
//     background-color: #fff;
//   `;

//   return(
//     <div className={styles.bg} style={{width: "100vw", height: "100vh",backgroundImage: "url(images/404error.jpg)"}}>
//       <p className={styles.info_text}>
//         404
//         Page No Found.
//       </p>
//       <SpinImg>
//         {/* <div className={styles.img} src="images/indu.png" alt=""/> */}
//       </SpinImg>
//     </div>
//   )
  
// };

// export default ErrorPage;