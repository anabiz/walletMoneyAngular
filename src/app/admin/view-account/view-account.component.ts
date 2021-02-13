import { UserService } from './../../user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'view-account',
  templateUrl: './view-account.component.html',
  styleUrls: ['./view-account.component.css']
})
export class ViewAccountComponent implements OnInit {
accounts;
  constructor(
    private route : ActivatedRoute,
    private userService: UserService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.route.paramMap.subscribe(async params=>{
      let id=params.get('id');
      console.log(params.get('id'));
      this.accounts =await this.userService.getUserAccount(id);
      console.log(this.accounts)
    })
  }

}
