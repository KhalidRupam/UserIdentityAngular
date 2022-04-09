import { Injectable } from '@angular/core';
import { UserRegister } from './user-register.model';
import  {HttpClient} from '@angular/common/http';
import { UserLogIn } from './user-log-in.model';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserIdentityService {

  fromData:UserRegister= new UserRegister();
  fromData1:UserLogIn= new UserLogIn();
  readonly baseURL ="https://localhost:44386/api/AccountApi";
  readonly loginURL="https://localhost:44386/api/AccountApi/Login";
  constructor(public http:HttpClient,private toastr:ToastrService) { }

  list:boolean=false;

  postuserDetail(){
    return this.http.post(this.baseURL,this.fromData);
  }
  getUserLogin(){
    this.http.post(this.loginURL,this.fromData1).toPromise()
    .then(
      res=>{
        this.list=true;
        this.toastr.success('Welcome '+this.fromData1.email,'Identity');
      },
      err=>{console.log(err)}
      
    );

    console.log(this.list);
  }
}
