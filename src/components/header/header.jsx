import React from 'react';
import styles from './header.module.css';

const Header = (props) => {
  return(
    <header className={styles.header}>
      <img className={styles.img} src="images/logo.png" alt="logo"/>
    </header>
  );
};

export default Header;