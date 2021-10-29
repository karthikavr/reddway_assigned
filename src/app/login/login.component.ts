import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  
  username:string="";
  password:string="";
  loggedin:string="0";

  loggedinCheck(){
    if(this.loggedin=="1"){
      this.route.navigate(['/home']);
    } else {
      this.route.navigate(['/login']);
    }
  }
  user = {name: "test", password: "test123"};

  login(){
    if(this.user.name == this.username && this.user.password == this.password){
      this.loggedin="1";
      this.loggedinCheck();
      console.log("Login Success! Valid Credentials");
    } else {
      this.loggedin="0";
      this.loggedinCheck();
      console.log("Please Enter Valid Credentials");
    }
  }
}
