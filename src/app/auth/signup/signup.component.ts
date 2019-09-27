import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { QueryService } from 'src/app/query.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  constructor(private query: QueryService) { }

  ngOnInit() {}


  signup(f: NgForm) {
    const full_name = f.value.full_name;
    const email = f.value.email;
    const password = f.value.password;

    this.query.post('Register', { full_name, email, password, user_type: 'on', token: '' }).subscribe(response => {
      
      // LocalStorage Set Token
      localStorage.setItem('token', response['token']);
    })
  }
}
