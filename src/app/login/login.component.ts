import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from '../model/user.model';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user = new User();
msg = '';
users : user;


  constructor(private service : RegistrationService, private router : Router) { }

  ngOnInit(): void {
  }

  loginUser() {
    this.service.loginUserFromRemote(this.user).subscribe(
      data =>{
        if (data.status == 200) {
          console.log("status is 200 ok");
          // can navigate or proceed
          console.log("Response Recieved");
          this.users = data.body;  console.log(this.users);
          console.log(this.users.userID);
          this.router.navigate(['/loginsuccess/', this.users.userID]); //naviagte
        }
      } ,
      error =>{
        console.log("Exception Occured");
        this.msg="Bad credentials, please enter valid emailId and password";
      }   
    )
  }
  
  gotoregistration(){
    this.router.navigate(['/registration'])
  }
}