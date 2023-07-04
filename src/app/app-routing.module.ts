import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { StudentsComponent } from './students/students.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthguardServiceService } from './authguard-service.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthguardServiceService] },
  { path: 'course', component: CourseComponent, canActivate: [AuthguardServiceService] },
  { path: 'students', component: StudentsComponent, canActivate: [AuthguardServiceService] },
  { path: 'signup', component: SignupComponent }

  //   {path: '',canActivateChild: [AuthguardServiceService],
  //    children: [
  //   { path:'home', component: HomeComponent },
  //   { path:'students', component: StudentsComponent }
  // ]
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  // providers:[AuthGuardServiceServic]
})
export class AppRoutingModule { }
