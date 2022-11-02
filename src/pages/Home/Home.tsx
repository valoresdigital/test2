import React, { useState } from 'react';
import { Card } from '../../components/Card/Card';
import { Footer } from '../../components/Footer/Footer';
import { Form } from '../../components/Form/Form';
import { Header } from '../../components/Header/Header';
import { IData, IDataResult } from '../../typing/DataInterface';
import styles from './Home.module.scss';


export const Home = () => {
  const [ data, setData ] = useState<IData>({
    num1: '',
    num2: '',
    operation: ''
});
const [ dataResult, setDataResult ] = useState<IDataResult>({
  message: '',
  result: null,
  letterValidated: ''
});
  return (
    <div className={styles.home}>
        <Header/>
        <h3 className={styles.home__title}>Test 2</h3>
        <Form 
          setData={setData} data={data}
          dataResult={dataResult} setDataResult={setDataResult}
         />
        <Card  dataResult={dataResult} />
        <Footer/>
    </div>
  )
}
