export const validationMainOperation = ( letter:string, num1 : string, num2 : string) => {
    let letterValidated = validateLetter(letter);
    let result = null;
    let message = '* Error: Please choose a letter';
    let objResult={}
    
    switch (letterValidated) {
        case 'S':
            if(validateInteger(num1, num2) && num1 !== '' && num2 !== '' ){
                message = 'Sum';
                result = Number(num1) + Number(num2);
            } else {
                message = '* Error: Numbers must be integers';
                return objResult= { message, result, letterValidated }
            }
            return  objResult= { message, result, letterValidated}
        case 'R':
            if(validateInteger(num1, num2) && num1 !== '' && num2 !== ''){
                message = 'Rest';
                result = Number(num1) - Number(num2);
            } else {
                message = '* Error: Numbers must be integers';
                return { message, result, letterValidated }
            }
            return { message, result, letterValidated}
        case 'M':
            if(validatePositiveNumber(num1, num2) && num1 !== '' && num2 !== ''){
                message = 'Multiply';
                result = Number(num1) * Number(num2);
            } else {
                message = '* Error: Numbers must be positive'
                return { message, result, letterValidated }
            }
            return { message, result, letterValidated }
        case 'D':
            if(validateDominator(num1, num2) && num1 !== '' && num2 !== ''){
                message = 'Devide';
                result = Number(num1) / Number(num2);
            } else {
                message = '* Error: Verify number / Denominator different from 0';
                return { message, result, letterValidated }
            }
            return { message, result, letterValidated }
        default:
            return { message, result, letterValidated }
    }
}

const validateLetter = (letter: string) => {
    if(typeof(letter) === 'string' && letter.length === 1 ){
        let UpperCaseLetter = letter.toUpperCase()
        return UpperCaseLetter;
    }
    return false;
}

const validateInteger = (num1 : string, num2: string) => {
    let firstNum = Number(num1);
    let secondNum = Number(num2);
    if(Number.isInteger(firstNum) && Number.isInteger(secondNum)) return true;
    return false;
}

const validatePositiveNumber = (num1 : string, num2: string) => {
    let firstNum = Number(num1);
    let secondNum = Number(num2);
    if(firstNum >= 0 && secondNum >= 0) return true;
    return false;
}

const validateNumber = (num1: string, num2: string) =>{
    let acceptedNumbers =  /^\-?[0-9]+\.?\d*$/;
    if (num1.match(acceptedNumbers) && num2.match(acceptedNumbers)) return true;
    return false;   
}

const validateDominator = (num1: string, num2: string) => {
    let secondNum = Number(num2);
    if(validateNumber( num1, num2 ) && secondNum !== 0) return true;
        return false;

}