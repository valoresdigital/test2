import React from 'react';
import {IDataOnlyProps } from '../../typing/DataInterface'
import './Card.module.scss';

export const Card = ({dataResult}:IDataOnlyProps) => {
  const { message,result,letterValidated} = dataResult
  return (
    <section>
      <div>
        <ul>
          {
          message==='Numbers must be integers'||
          message==='Numbers must be positive'||
          message==='Denominator must be different from 0'
          ?<p >Error: {message} </p>
          :
          <li>
            el resultado de la operacion con la letra {letterValidated}
            <br/>
            result: {result}
            <br/>
            Operation: {message}
          </li>
          }
          
        </ul>
      </div>
    </section>
  )
}
