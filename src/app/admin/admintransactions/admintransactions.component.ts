import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'admintransactions',
  templateUrl: './admintransactions.component.html',
  styleUrls: ['./admintransactions.component.css']
})
export class AdmintransactionsComponent implements OnInit {

  isAdmin ;
  transactions;
  user;
  constructor(
    private authService: AuthService,
    private Routes: Router,
    private adminService: AdminService,
  ) { }


  async ngOnInit(): Promise<void> {
    this.transactions =await this.authService.getTransactions();
    const [decodeUserToken, isexpired] = this.authService.loginUserInfo();
    this.user = decodeUserToken;
    
  }
  reloadComponent() {
    let currentUrl = this.Routes.url;
        this.Routes.routeReuseStrategy.shouldReuseRoute = () => false;
        this.Routes.onSameUrlNavigation = 'reload';
        this.Routes.navigate([currentUrl]);
  }

  async approveTransaction(id){
    console.log(id)
    await this.adminService.transactionApproval(id);
    this.reloadComponent()
  }
}
