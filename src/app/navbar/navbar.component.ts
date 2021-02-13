import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private Routes: Router,
  ) { }

isAdmin(){
  return this.authService.isAdmin()
}

isLoginUser(){
  const user = this.authService.getUser();
  if(user) return true;
  return false;
}



  logout(){
    localStorage.removeItem("userInfo");
    localStorage.removeItem("token")
    this.Routes.navigate(['/login']);
  }


  ngOnInit(): void {
    this.isLoginUser()
  }

}
