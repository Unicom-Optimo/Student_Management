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
  user='1'
  public loginForm!: FormGroup

  constructor(private formBuider: FormBuilder, private http: HttpClient, private router: Router,private authService:AuthguardServiceService) {
  }


  ngOnInit(): void {
    this.loginForm = this.formBuider.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }



//   ngOnInit() {  
//     localStorage.setItem('SeesionUser',this.user)  
//  } 
login() {

  if(this.loginForm.valid){
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe( res => {
      console.log(res);
      alert("Successfully logged in!");
      localStorage.setItem('currentUser' , this.loginForm.value.userName);
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


   // this.authService.login(this.loginForm.value)
  // .subscribe({
  //   next:(res)=>{
  //     alert(res);
  //     this.loginForm.reset();
  //     this.router.navigate(['home'])
  // },
  // error:(err)=>{
  //   alert(err?.error.message)
  // }
  // });







    // this.http.get<any>("https://localhost:7253/api/UserModels")//http://localhost:3000/signupUsers
    //   .subscribe(res => {
    //     const user = res.find((a: any) => {
    //       return a.userName === this.loginForm.value.userName && a.password === this.loginForm.value.password
    //     });
    //     if (user) {
    //       alert("Login Success");
    //       this.loginForm.reset();
    //       this.router.navigate(['home'])
    //     } else {
    //       alert("User not found \nPlease enter correct username & password")
    //     }
    //   }, err => {
    //     alert("Something went wrong!")
    //   })

