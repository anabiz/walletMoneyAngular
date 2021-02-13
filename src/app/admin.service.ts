import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    //private httpClient: HttpClient,
    private userService: UserService,
  ) { }


  public header() {
    const token = JSON.parse(localStorage.getItem("token"));
    return { authorization: `Bearer ${token}`, }
  }

  public async transactionApproval(id){
    console.log("my header",this.header())
    const response = await axios.post(`http://localhost:3000/apiv1/admin/fundapproval/${id}`, { 'headers': this.userService.header() } )
    .then(res => {
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
  
  public async getUsers(){
    console.log(this.userService.header())
    const response = await axios.get(`http://localhost:3000/apiv1/admin/users`, { 'headers': this.header() } )
    .then(res => {
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

}
