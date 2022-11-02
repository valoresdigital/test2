import React, { SyntheticEvent,ChangeEvent, useEffect, useState } from 'react';
import  styles from './Form.module.scss';
import { validationMainOperation } from '../../utils/MainFunctionalities';
import { ClassError } from '../../utils/MainError';
import { IDataProps } from '../../typing/DataInterface';



export const Form = ({setData,data,dataResult,setDataResult}:IDataProps) => {
    const {num1, num2, operation } = data;
    const [error , setError] = useState({
        error__Integer: '',
        error__letter:''
    })
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [e.target.name]:e.target.value
        });
    }
    const sendData = (e:SyntheticEvent) => {
        e.preventDefault();
        
        const result:any = validationMainOperation(operation, num1, num2)
        console.log("result:", result);
        setDataResult(result)

         
    }
    useEffect(() => {
        if(dataResult.result !== null){
            setData({
                num1: '',
                num2: '',
                operation: ''
            })
            setError({
                error__Integer: '',
                error__letter:''
            })
        }
        ClassError(dataResult, setError)

    },[dataResult])


  return (
    <div className={styles.form}>
    <form onSubmit={sendData}>
        <label className={styles.form__label}>
            <p className={styles.form__label__title}>First number:</p>
            <input
                value={num1}
                className={`${styles.form__label__input} ${error.error__Integer}`}
                type='text'
                placeholder='Type your first number'
                name='num1'
                onChange={handleChange}
            />
        </label>


            <label  className={styles.form__label}>
            <p className={styles.form__label__title}>Second number:</p>
                <input
                    value={num2}
                    className={`${styles.form__label__input}  ${error.error__Integer}`}
                    type='text'
                    placeholder='Type your second number'
                    name='num2'
                    onChange={handleChange}
                />
            </label>


            <label  className={styles.form__label}>
            <p className={styles.form__label__title}>Choose operation:</p>
                <input
                value={operation}
                    className={`${styles.form__label__input} ${error.error__letter}`}
                    type='text'
                    placeholder='Type letter S, R, M or D'
                    name='operation'
                    onChange={handleChange}
                />
            </label>

        <input className={styles.form__btn} type='submit' value='Submit'/>
    </form>
    </div>
  )
}
