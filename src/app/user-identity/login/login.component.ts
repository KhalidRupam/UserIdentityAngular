import { Component, OnInit } from '@angular/core';
import {UserIdentityService} from 'src/app/shared/user-identity.service';
import { NgForm,FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(public service:UserIdentityService ) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    this.service.getUserLogin()
    }
}
