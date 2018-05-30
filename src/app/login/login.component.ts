import { Component, OnInit } from '@angular/core';
import { AuthService } from '../mythings/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }


  callLogin(){
        this.auth.login();
  }
}
