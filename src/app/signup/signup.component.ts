import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { SignupModel } from './signup.model';
import { ApiServiceSignup } from '../service/api.service.signup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signUpForm!: FormGroup;


   //validation
 formdata = { fullname: "", userName: "", password: "", mobile: "" ,userType: "" }
 submit = false;

  signupModelObj: SignupModel = new SignupModel();
  signupData !: any; //get


  constructor(private formBuilder: FormBuilder, private api: ApiServiceSignup, private http: HttpClient, private router: Router) {


  }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required],
      mobile: ['', Validators.required],
      userType: ['', Validators.required]
    })

  }



  //post
  postUserDetails(){
    this.signupModelObj.fullname = this.signUpForm.value.fullname;
    this.signupModelObj.userName = this.signUpForm.value.userName;
    this.signupModelObj.password = this.signUpForm.value.password;
    this.signupModelObj.mobile = this.signUpForm.value.mobile;
    this.signupModelObj.userType = this.signUpForm.value.userType;
    this.api.postUser(this.signupModelObj)

      .subscribe(res => {
        console.log(res);
        alert("User Added Successfully")
        let ref = document.getElementById("cancle")
        ref?.click();
        this.signUpForm.reset();

      },
        err => {
          alert("Something went wrong")
        }

      )
  }

  // onSubmit(){
  //   console.log(this.formdata)
  //   }


  // signUp(){
  //   this.http.post<any>("https://localhost:7253/api/UserModels",this.signUpForm.value)//http://localhost:3000/signupUsers
  //   .subscribe(res=>{
  //     alert("SignUp Successfully");
  //     this.signUpForm.reset();
  //     this.router.navigate(['login']);
  //   },err=>{
  //     alert("Wrong")
  //   })

  // }
  onSubmit() {
    console.log(this.formdata);
  }



}
