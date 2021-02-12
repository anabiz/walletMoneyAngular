import { logging } from 'protractor';
import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders  } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";
//import { JwtHelper } from "angular2-jwt"



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient)  { }

  public login(credential){
    let enco : any = new HttpHeaders()
    return this.httpClient.post(`http://localhost:3000/apiv1/login`, credential)
  }

  public register(credential){
    return this.httpClient.post(`http://localhost:3000/apiv1/register`, credential);
  }

  public getTransactions(){
    const token = localStorage.getItem("token")
    let headers = new HttpHeaders()
  .set('authorization', `bearer ${token}`)
    const result = this.httpClient.get('http://localhost:3000/apiv1/admin/transactions', { 'headers': headers } )
    .subscribe(response => console.log(response));
    return result;
  }

 public tokenInfo(token){
    const jwtHelper = new JwtHelperService();
    const decodeUserToken = jwtHelper.decodeToken(token);
    const isexpired = jwtHelper.isTokenExpired(token);
    return [decodeUserToken, isexpired];
  }

 public gettUserFromToken(token){
  const jwtHelper = new JwtHelperService();
  return jwtHelper.decodeToken(token);
}
  public loginUserInfo(){
    const token = JSON.parse(localStorage.getItem("token"));
   return this.tokenInfo(token)
  }
}
