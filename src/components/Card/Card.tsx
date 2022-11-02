import React from 'react';
import {IDataOnlyProps } from '../../typing/DataInterface'
import {ErrorMessageRender } from '../../utils/MainError'
import styles from './Card.module.scss';

export const Card = ({dataResult}:IDataOnlyProps) => {
  const { message,result,letterValidated} = dataResult
  return (
    <section className={styles.card}>
        <ul className={styles.card__list}>
          {
          ErrorMessageRender(message)
          ?<p className={styles.card__list__error}>{message} </p>
          :
          <li>
            Operation with <strong>{letterValidated}</strong> is a <strong>{message}</strong>
            <br/>
            Result: <strong>{result}</strong>
            <br/> 
          </li>
          }
          
        </ul>
    </section>
  )
}
