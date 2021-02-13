import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
inValidLogin=false;

  constructor(
    private authService: AuthService,
    private Routes: Router,
  ) { }

 

  onSubmit(input) {
    this.authService.login(input)
    .subscribe((user) =>{
      console.log(user)
      if(user && user["token"])
      localStorage.setItem("userInfo", JSON.stringify(user)); 
      localStorage.setItem("token", JSON.stringify(user["token"])); 
      const user1 = this.authService.gettUserFromToken( user["token"]);
      console.log(user1)
      user1["is_admin"] ? this.Routes.navigate(['/admin/dashboard']) : this.Routes.navigate(['/dashboard']);;
    }, err=>{
      this.inValidLogin = true;
    });
  }

  log(email) {
    //console.log(email)
  }

}
