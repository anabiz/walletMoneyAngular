import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  public header(){
    const token = localStorage.getItem("token")
    return { authorization: `Bearer ${token}`,}
  }

  public async getUserAccount(id: string){
  //    let headers = new HttpHeaders()
  //  .set('authorization', "Bearer " + `${token}`)
  const response = await axios.get(`http://localhost:3000/apiv1/user/${id}`, {'headers':this.header()})
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
    // this.httpClient.get(`http://localhost:3000/apiv1/user/${id}`, {'headers':headers})
    // .subscribe(accounts=> {
    //   response = accounts["data"];
    // }
    // ,err=>{
    //   return false
    // });
    // console.log(response)
    // return response;
  }


  public async creditOrDebitAccount(payload:{amount:number,currency:string,transaction_type:string}){

  const response = await axios.post(`http://localhost:3000/apiv1/fundaccount`,payload, {'headers':this.header()})
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

  public getUserFromLocalStorage(){
    return JSON.parse(localStorage.getItem("userInfo"));
  }

}
