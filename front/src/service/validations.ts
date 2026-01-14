import {type UserData} from './api.ts'

function validateEmail(email: string): boolean{
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
};

function validateName(name: string): boolean{
  const re = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9]{2,30}$/;
  return re.test(name.trim());
};

function validatePassword(password: string, confirmPassword: string): boolean{
    return (password.trim() === confirmPassword.trim())
}

interface validateUserDataResponse{
  errorMessage: string,
  validData: boolean,
}

export function validateUserData(userData: UserData): validateUserDataResponse {
  let errorMessage: string = "";
  let validData: boolean = true;
  if(!validateName(userData.name)){
    errorMessage = "Nome invalido"
    validData = false
  }
  else if(!validateEmail(userData.email)){
    errorMessage = "Email invalido!"
  }
  else if(!validatePassword(userData.password, userData.confirmPassword)){
    errorMessage = "Ambos as senhas devem ser iguais!"
  }
  return {
    errorMessage: errorMessage,
    validData: validData,
  }
}