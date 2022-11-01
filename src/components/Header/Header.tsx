import React from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/logo.png';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <img src={logo} alt='logo' className={styles.header__container__img}/>  
      </div>
    </header>
  )
}
