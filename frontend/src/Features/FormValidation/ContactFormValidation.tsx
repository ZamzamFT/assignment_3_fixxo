// validating comments and name
export const validateText = (elementName: string, value: string, minLenght: number = 2) => {
    if( value.length === 0) 
        return `${elementName} is required` 
  
    else if (value.length < minLenght)
            return `${elementName} must contain at least ${minLenght} characters`
    else 
       return ''
  
  
  }
  
  
  // validating email
  export const validateEmail = (elementName: string, value:string, regEx: RegExp = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/) => {
    if( value.length === 0) 
        return `${elementName} is required` 
  
    else if (!regEx.test(value))
            return `${elementName} must be a valid e-mail adress`
    else 
       return ''
  }