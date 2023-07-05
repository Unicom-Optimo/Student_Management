import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { StudentsComponent } from './students/students.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthenticationGuard } from './authenticaton.guard';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthenticationGuard] },
  { path: 'course', component: CourseComponent, canActivate: [AuthenticationGuard] },
  { path: 'students', component: StudentsComponent, canActivate: [AuthenticationGuard] },
  { path: 'signup', component: SignupComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
