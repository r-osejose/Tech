import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

constructor(private router:Router){

}
  ngOnInit() {
    
  }
handleLogin(){
  console.log('Login button clicked')
  //console.log(this.username)
  //console.log(this.password)
  if(this.username === "Rose" && this.password === "qwerty"){
    this.invalidLogin = false
    //Redirect to welcome page
    this.router.navigate(['Welcome',this.username])
  }
  else{
    this.invalidLogin = true
  }
}
}