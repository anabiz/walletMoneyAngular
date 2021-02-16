import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  public header() {
    const token = JSON.parse(localStorage.getItem("token"));
    return { authorization: `Bearer ${token}`, }
  }

  public async getUserAccount(id: string) {
    const response = await axios.get(`http://pocketcoin.azurewebsites.net/apiv1/user/${id}`, { 'headers': this.header() })
      .then(res => {
        console.log(res);
        console.log(res.data.data)
        return res.data.data;
      })
      .catch((error) => {
        console.log(error);
        return false;
      })
    console.log(response)
    return response;

  }


  public async creditOrDebitAccount(payload: { amount: number, currency: string, transaction_type: string }) {
    const header =this.header();
    console.log(header)
    const response = await axios.post(`http://pocketcoin.azurewebsites.net/apiv1/fundaccount`, payload, { 'headers': header })
      .then(res => {
        console.log(res);
        console.log(res.data.data)
        return res.data.data;
      })
      .catch((error) => {
        console.log(error);
        return false;
      })
    console.log(response)
    return response;

  }

  public getUserFromLocalStorage() {
    return JSON.parse(localStorage.getItem("userInfo"));
  }

}
