import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
geturl(){
  return "url('http://s1.1zoom.net/big0/195/Money_Coins_Bitcoin_Gray_background_Wallet_579838_1280x853.jpg')"
}
}
