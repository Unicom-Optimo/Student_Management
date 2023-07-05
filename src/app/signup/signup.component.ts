import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { SignupModel } from './signup.model';
import { ApiServiceSignup } from '../service/api.service.signup';
import { AuthguardServiceService } from '../authguard-service.service';
//import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signUpForm!: FormGroup;


  //validation
  formdata = { fullName: "", userName: "", password: "", mobile: "", userType: "" ,token:"",email:""}
  submit = false;

  signupModelObj: SignupModel = new SignupModel();
  signupData !: any; //get
  //ValidateForm !:any;

  constructor(private formBuilder: FormBuilder, private apiSignup: ApiServiceSignup, private router: Router,private  authService:AuthguardServiceService) {

  }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required],
      mobile: ['', Validators.required],
      userType: ['', Validators.required],
      token: ['', Validators.required],
      email: ['', Validators.required]
    })

  }

  post
  postUserDetails(){
    if(this.signUpForm.valid){
      this.authService.signUp(this.signUpForm.value)
      .subscribe({
        next:(res=>{
         // alert(res.message)
         alert("Successfully Signup!")
          this.signUpForm.reset();
          this.router.navigate(['login']);
        })
        ,error:(err=>{
          alert(err?.error.message)
        })   
      })

    console.log(this.signUpForm.value)

    }else{
      alert ;
      //ValidateForm.validateAllFormFileds(this.signUpForm)
   }
  }

  
   onSubmit() {
    console.log(this.formdata);
   }

  }







    // this.signupModelObj.fullName = this.signUpForm.value.fullName;
    // this.signupModelObj.userName = this.signUpForm.value.userName;
    // this.signupModelObj.password = this.signUpForm.value.password;
    // this.signupModelObj.mobile = this.signUpForm.value.mobile;
    // this.signupModelObj.userType = this.signUpForm.value.userType;
    // this.apiSignup.postUser(this.signupModelObj).subscribe(res => {
    //   console.log(res);
    //   alert("User Added Successfully")
    //   let ref = document.getElementById("cancle")
    //   ref?.click();
    //   this.signUpForm.reset();
    //   // alert("SignUp Successfully");
    //   // this.signUpForm.reset();
    //   this.router.navigate(['login']);
    // },
    //   err => {
    //     alert("Something went wrong")
    //   }
    // )
  

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
  
