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
    private Routes: Router,
    private userService: UserService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.token =  this.userService.getUserFromLocalStorage()
    this.user =this.authService.gettUserFromToken(this.token.token)
    //this.isAdmin =  this.user["is_admin"];
    console.log("jjjjjjj",this.user)
    console.log("jjjjjjj",this.token)
    this.accounts = await this.userService.getUserAccount(this.user["id"])
    if(!this.accounts) this.loading = true ;
    //console.log(this.isAdmin, "hhh", this.user, "lll", this.accounts)
    console.log("jjjjjjj",this.accounts)
  }

  transaction(data){
    
    console.log(data)
    let result = this.userService.creditOrDebitAccount(data)
    console.log(result)
  }

  isadmin(){
 
  }
}
