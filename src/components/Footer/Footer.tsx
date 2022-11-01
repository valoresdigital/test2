import React from 'react';
import styles from './Footer.module.scss';
import { TiSocialLinkedin } from "react-icons/ti";
import { AiOutlineGithub } from "react-icons/ai";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.footer__container}>
            <p className={styles.footer__container__text}>
                Copyright &copy; 2022 All Rights Reserved 
            </p>
            <ul className={styles.footer__container__list}>
                <li className={styles.footer__container__list__social}>
                    <a href='https://www.linkedin.com/in/nahomiconde/' className={styles.footer__container__list__social}>
                        <AiOutlineGithub />
                    </a>
                </li>
                <li className={styles.footer__container__list__social}>
                    <a href='https://github.com/nahyoomi' className={styles.footer__container__list__social}>
                        <TiSocialLinkedin />
                    </a>
                </li>
            </ul>
        </div>    
    </footer>
  )
}