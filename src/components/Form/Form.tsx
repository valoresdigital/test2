import React, { SyntheticEvent,ChangeEvent } from 'react';
import  styles from './Form.module.scss';
import { validationMainOperation } from '../../utils/MainFunctionalities';
import { IDataProps } from '../../typing/DataInterface';


export const Form = ({setData,data,dataResult,setDataResult}:IDataProps) => {
    
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [e.target.name]:e.target.value
        });
    }
    const sendData = (e:SyntheticEvent) => {
        e.preventDefault();
        const {num1, num2, operation } = data;
        const result:any = validationMainOperation(operation, num1, num2)
        console.log("result:", result);
        setDataResult(result)
         
    }

  return (
    <div className={styles.form}>
    <form onSubmit={sendData}>
        <div>
            <label>
            First number:
                <input
                    type='text'
                    placeholder='Type your first number'
                    name='num1'
                    onChange={handleChange}
                />
            </label>
        </div>
        <div>
            <label>
            Second number:
                <input
                    type='text'
                    placeholder='Type your second number'
                    name='num2'
                    onChange={handleChange}
                />
            </label>
        </div>
        <div>
            <label>
            Select your operation:
                <input
                    type='text'
                    placeholder='Type letter S, R, M or D'
                    name='operation'
                    onChange={handleChange}
                />
            </label>
        </div>
        <input type='submit' value='Submit'/>
    </form>
    </div>
  )
}
