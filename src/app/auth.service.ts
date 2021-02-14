import { UserService } from './user.service';
import { logging } from 'protractor';
import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders  } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";
import axios from 'axios';
//import { JwtHelper } from "angular2-jwt"



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient,
    private userService: UserService
    )  { }

  public login(credential){
    let enco : any = new HttpHeaders()
    return this.httpClient.post(`https://pocketcurrency.herokuapp.com/apiv1/login`, credential)
  }

  public register(credential){
    return this.httpClient.post(`https://pocketcurrency.herokuapp.com/apiv1/register`, credential);
  }

  public async getTransactions(){

    const response = await axios.get('https://pocketcurrency.herokuapp.com/apiv1/admin/transactions', { 'headers':this.userService.header() } )
    .then(res => {
      console.log(res);
      console.log(res.data.data)
      return res.data.data;
    })
    .catch((error) => {
      console.log("errrrrrr",error);
      return false;
    })
  console.log(response)
  return response;
  }

 public tokenInfo(token){
    const jwtHelper = new JwtHelperService();
    const decodeUserToken = jwtHelper.decodeToken(token);
    const isexpired = jwtHelper.isTokenExpired(token);
    return [decodeUserToken, isexpired];
  }

public isAdmin(){
  const [decodeUserToken] = this.loginUserInfo();
  if(decodeUserToken.is_admin) return true;
  return false;
}

public getUser(){
  const token = JSON.parse(localStorage.getItem("token"));
  const jwtHelper = new JwtHelperService();
  return jwtHelper.decodeToken(token);
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
