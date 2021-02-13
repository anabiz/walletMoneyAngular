import { UserService } from './../user.service';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
token
user 
isAdmin 
accounts 
loading;
users
  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService,
    
  ) { }

  async ngOnInit(): Promise<void> {
    this.token =  this.userService.getUserFromLocalStorage()
    this.user =this.authService.gettUserFromToken(this.token.token)
  
    this.accounts = await this.userService.getUserAccount(this.user["id"])
    if(!this.accounts) this.loading = true;
    
  }
  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
}
  async transaction(data){
    console.log(data)
    let result =await this.userService.creditOrDebitAccount(data)
    console.log(result)
    this.reloadComponent();
  }

  isadmin(){
 
  }
}
