import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { StudentsComponent } from './students/students.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuardServiceService } from './service/auth-guard-service.service';


const routes: Routes = [
  { path: '',redirectTo:'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent,canActivate:[AuthGuardServiceService] },
  { path: 'course', component: CourseComponent ,canActivate:[AuthGuardServiceService] },
  { path: 'students', component: StudentsComponent,canActivate:[AuthGuardServiceService] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent ,canActivate:[AuthGuardServiceService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
