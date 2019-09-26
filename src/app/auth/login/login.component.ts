import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  login(f: NgForm) {
    const email = f.value.email;
    const password = f.value.password;

    console.log(email + ' ' + password);

    f.reset();
  }
}
