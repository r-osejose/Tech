import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string){
    if(username === "Rose" && password === "qwerty"){
      sessionStorage.setItem('authenticatedUser', username)
      return true;  
  }
  return false;
}

isUserLoggedIn(){
  let user = sessionStorage.getItem('authenticaterUser')
  return !(user === null)
}
}