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
  formdata = { fullName: "", userName: "", password: "", mobile: "", userType: "" }
  submit = false;

  signupModelObj: SignupModel = new SignupModel();
  signupData !: any; //get


  constructor(private formBuilder: FormBuilder, private apiSignup: ApiServiceSignup, private router: Router) {

  }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required],
      mobile: ['', Validators.required],
      userType: ['', Validators.required]
    })

  }

  //post
  postUserDetails(){
    this.signupModelObj.fullName = this.signUpForm.value.fullName;
    this.signupModelObj.userName = this.signUpForm.value.userName;
    this.signupModelObj.password = this.signUpForm.value.password;
    this.signupModelObj.mobile = this.signUpForm.value.mobile;
    this.signupModelObj.userType = this.signUpForm.value.userType;
    this.apiSignup.postUser(this.signupModelObj).subscribe(res => {
      console.log(res);
      alert("User Added Successfully")
      let ref = document.getElementById("cancle")
      ref?.click();
      this.signUpForm.reset();
      // alert("SignUp Successfully");
      // this.signUpForm.reset();
      this.router.navigate(['login']);
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
