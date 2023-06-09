import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './Components/courses/courses.component';
import { FormComponent } from './Components/form/form.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';

const routes: Routes = [
  {path: 'form', component: FormComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'home', component: LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
