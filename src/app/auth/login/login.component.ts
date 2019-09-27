import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { QueryService } from 'src/app/query.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public invalidUsernameOrPassword: boolean = false;
  constructor(private query: QueryService) { }

  ngOnInit() { }

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
}
