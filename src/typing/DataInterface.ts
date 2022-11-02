export interface IData {
    num1: string,
    num2: string,
    operation: string
  }
  export interface IDataResult {
    message: string,
    result: null,
    letterValidated: string
  }

  export interface IError {
    error__Integer: string,
        error__letter:string
  }

  export interface IDataProps  {
    setData: React.Dispatch<React.SetStateAction<IData>>,
    data:IData,
    setDataResult:React.Dispatch<React.SetStateAction<IDataResult>>,
    dataResult: IDataResult

}

export interface IDataOnlyProps  {
    dataResult: IDataResult
}
