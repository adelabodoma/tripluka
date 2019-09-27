import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { QueryService } from 'src/app/query.service';

import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public invalidUsernameOrPassword: boolean = false;
  constructor(private query: QueryService, private fb: Facebook) { }

  ngOnInit() {
    // Init Facebook Plugin
    window['FB'].init({
      appId: 1100079370189393,
      xfbml: true,
      version: 'v2.8'
    });
  }

  login(f: NgForm) {
    const email = f.value.email;
    const password = f.value.password;

    this.query.post('Login', { email, password, token: '' }).subscribe(response => {

      // LocalStorage Set Token
      localStorage.setItem('token', response['token']);
    }, error => {
      // Invalid Username or Password
      this.invalidUsernameOrPassword = true;
    });
  }

  loginFB() {
    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
      .catch(e => console.log('Error logging into Facebook', e));
  }
}
