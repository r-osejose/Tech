import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  username =""
  password = ""
  errorMessage = "Invalid Login Credentials"
  invalidLogin = false

constructor(private router:Router, private hardcodedAuthenticationService: HardcodedAuthenticationService){
}
  ngOnInit() {
    
  }
handleLogin(){
  console.log('Login button clicked')
  //console.log(this.username)
  //console.log(this.password)
  // if(this.username === "Rose" && this.password === "qwerty"){
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
    //Redirect to welcome page
    this.router.navigate(['Welcome',this.username])
    this.invalidLogin = false
  }
  else{
    this.invalidLogin = true
  }
}
}