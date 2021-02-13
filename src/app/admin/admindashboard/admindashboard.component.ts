import { AuthService } from './../../auth.service';
import { Component,Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';



@Component({
  selector: 'admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit{
 // @Output() accountEvent = new EventEmitter();
  isAdmin ;
  users;
  user;
  constructor(
    private authService: AuthService,
    private Routes: Router,
    private adminService: AdminService,
  ) { }


  async ngOnInit(): Promise<void> {
    this.users =await this.adminService.getUsers();
    console.log(this.users, "gggggggggg")
    const [decodeUserToken, isexpired] = this.authService.loginUserInfo();
    this.user = decodeUserToken;
    
  }

  viewAccount(id){
    console.log(id)
    //this.accountEvent.emit(id);
    this.Routes.navigate([`/admin/viewaccount/${id}`]) 
  }
 
}
