import React from 'react';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import styles from './Home.module.scss';

export const Home = () => {
  return (
    <div className={styles.home}>
        <Header/>
        <Footer/>
    </div>
  )
}
