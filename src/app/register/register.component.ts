import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private Routes: Router,
  ) { }
isRegistered;

  ngOnInit(): void {
  }

  onSubmit(input) {
    console.log(input)
    this.authService.register(input)
    .subscribe(user =>{
      console.log(user)
      if(user) 
        this.Routes.navigate(['/dashboard']);
      else
        this.isRegistered = true;
    })
  }

}
