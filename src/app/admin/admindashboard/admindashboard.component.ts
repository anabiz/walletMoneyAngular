import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { AuthService } from '../../auth.service';


@Component({
  selector: 'admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit{
  isAdmin ;
  
  constructor(
    private authService: AuthService,
    private Routes: Router,
  ) { }


  async ngOnInit(): Promise<void> {
    const transactions =await this.authService.getTransactions();
    console.log(transactions)
    console.log(this.isAdmin)
    const [decodeUserToken, isexpired] = this.authService.loginUserInfo();
    console.log(decodeUserToken, isexpired , "jjjjjjjj")
  }
  //let admin = authService.isAdmin()
  // isadmi(){
  //   this.isAdmin = authService.isAdmin();
  // }
 
}
