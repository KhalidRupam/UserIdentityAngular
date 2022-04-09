import { Component, OnInit } from '@angular/core';
import {UserRegister}from 'src/app/shared/user-register.model';
import { NgForm,FormsModule } from '@angular/forms';
import {UserIdentityService} from 'src/app/shared/user-identity.service'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: [
  ]
})
export class RegistrationComponent implements OnInit {

  constructor(public service:UserIdentityService, public toaster:ToastrService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    this.service.postuserDetail().subscribe(
      res=>{
        console.log("Done");
        this.toaster.success('Registered SuccessFully','Identity');
      }
    )
    
  }
}
