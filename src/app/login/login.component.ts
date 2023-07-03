import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuardServiceService } from '../service/auth-guard-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup

  constructor(private formBuider: FormBuilder, private http: HttpClient, private router: Router,private authService:AuthGuardServiceService) {

  }
  ngOnInit(): void {
    this.loginForm = this.formBuider.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }


  login() {
    this.http.get<any>("https://localhost:7253/api/UserModels")//http://localhost:3000/signupUsers
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.userName === this.loginForm.value.userName && a.password === this.loginForm.value.password
        });
        if (user) {
          alert("Login Success");
          this.loginForm.reset();
          this.router.navigate(['home'])
        } else {
          alert("User not found \nPlease enter correct username & password")
        }
      }, err => {
        alert("Something went wrong!")
      })
  }


}
