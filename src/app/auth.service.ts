import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient)  { }

  public login(){
    //return this.httpClient.post(`https://mywalletmoney.herokuapp.com/apiv1/login`);
  }

  public getTransactions(){
    
    const result = this.httpClient.get('https://mywalletmoney.herokuapp.com/apiv1/admin/transactions')
    .subscribe(response => console.log(response));
    return result;
  }
}
