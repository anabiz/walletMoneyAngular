import { EmailService } from './../email.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
inValidLogin;

  constructor(
    private authService: AuthService,
    private Routes: Router,
  ) { }

  ngOnInit(): void {
    const transactions = this.authService.getTransactions();
    console.log(transactions)
  }

  onSubmit(input) {
    this.authService.login(input)
    .subscribe(user =>{
      //console.log(user)
      if(user) 
        this.Routes.navigate(['/dashboard']);
      else
        this.inValidLogin = true;
    })
   
  }

  log(email) {
    console.log(email)
  }

}
