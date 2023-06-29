import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
public signUpForm!:FormGroup;



  // formdata={fName:"",userName:"",password:""}
  // submit=false;


/**
 *
 */
constructor(private formBuilder:FormBuilder,private http:HttpClient, private router:Router) {
 
  
}

  ngOnInit(): void {
    this.signUpForm=this.formBuilder.group({
      fullname:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      mobile:['',Validators.required]
    })
   
  }


  // onSubmit(){
  //   console.log(this.formdata)
  //   }


  signUp(){
    this.http.post<any>("http://localhost:3000/signupUsers",this.signUpForm.value)
    .subscribe(res=>{
      alert("SignUp Successfully");
      this.signUpForm.reset();
      this.router.navigate(['login']);
    },err=>{
      alert("Wrong")
    })

  }



}
