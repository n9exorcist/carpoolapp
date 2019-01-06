import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registeredUserData = {}
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }
  
  registerUser() {
    console.log(this.registeredUserData);
    this.loginService.registerUser(this.registeredUserData).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }
}
