import {IDataResult,IError } from '../typing/DataInterface'

export  const ClassError =(dataResult:IDataResult,setError:React.Dispatch<React.SetStateAction<IError>>) =>{
    let clase= ""
    if(dataResult.message ==="* Error: Numbers must be integers" ||
    dataResult.message === '* Error: Numbers must be positive' ||
    dataResult.message === '* Error: Verify number / Denominator different from 0'){
        setError({
            error__letter:'',
            error__Integer:'error__Integer'
        })
    }else if (dataResult.message === '* Error: Please choose a letter'){
        setError({
            error__Integer:'',
            error__letter:'error__letter'
        })
    }
    return clase
}

export const  ErrorMessageRender = (message:string) =>{
    if(
        message==='* Error: Numbers must be integers'||
        message==='* Error: Numbers must be positive'||
        message===""||
        message==="* Error: Please choose a letter"||
        message==='* Error: Verify number / Denominator different from 0'
    )return true;
    return false;
}