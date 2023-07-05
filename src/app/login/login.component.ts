import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthguardServiceService } from '../authguard-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = '1'

  public loginForm!: FormGroup

  constructor(private formBuider: FormBuilder, private http: HttpClient, private router: Router, private authService: AuthguardServiceService) {
  }


  ngOnInit(): void {
    this.loginForm = this.formBuider.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }


  login() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.authService.login(this.loginForm.value).subscribe(res => {
        console.log(res);
        alert("Successfully logged in!");
        localStorage.setItem('currentUser', this.loginForm.value.userName);
        this.loginForm.reset();
        this.router.navigate(['home']);
      }, error => {
        alert("Please input valid username or password");
        console.log(error);
      });


      // this.authService.login(this.loginForm.value).subscribe( res => {
      //   console.log(res);
      //   localStorage.setItem('currentUser' , this.loginForm.value);
      //   alert("Successfully logged in!")
      //   this.loginForm.reset();
      //   this.router.navigate(['home'])
      //   }, error =>{
      //     alert("Please input valid username or password")
      //   });

    }


  }

}









