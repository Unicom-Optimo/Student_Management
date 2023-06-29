import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

public loginForm!:FormGroup

  // formdata={userName:"",password:""}
  // submit=false;
 
  //userName:any
  //password:any
/*
  loginFormValue !: FormGroup;
  loginModelObj: LoginModel = new LoginModel();
  loginData !: any; //get

*/
  constructor(private formBuider:FormBuilder,private http:HttpClient,private router:Router){

  }
  ngOnInit(): void {
    this.loginForm=this.formBuider.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }


  login(){
this.http.get<any>("http://localhost:3000/signupUsers")
.subscribe(res=>{
  const user=res.find((a:any)=>{
    return a.email===this.loginForm.value.email && a.password===this.loginForm.value.password
  });
  if(user){
    alert("Login Success");
    this.loginForm.reset();
    this.router.navigate(['home'])
  }else{
    alert("User not found \nPlease enter correct username & password")
  }
},err=>{
  alert("Something went wrong!")
})
  }
  
  /*##private formbuilder: FormBuilder,
    private api: ApiServiceLogin) {
  }*/


  


//   onSubmit(){
// console.log(this.formdata)
// }


//   postLgin() {
//     if (this.formdata.userName == 'AK97' && this.formdata.password == '1234') {
//       alert("Login Success!");
//       this.router.navigate(['home']);
      
//     }
//     else {
//       alert("Login Faild!")
//     }
//   }




  //post
  /*
  postLgin() {

    this.loginModelObj.userName = this.loginFormValue.value.userName;
    this.loginModelObj.password = this.loginFormValue.value.password;


    this.api.postLogin(this.loginModelObj)
      .subscribe(res => {
        console.log(res);
        alert("Login Successfully")
        let ref = document.getElementById('cancel')
        ref?.click();
        this.loginFormValue.reset();
      },
        err => {
          alert("Something went wrong")
        }
      )
  }*/


}
