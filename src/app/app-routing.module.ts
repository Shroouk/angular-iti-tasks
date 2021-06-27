import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { Test2Component } from './test2/test2.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path:'',component:StudentsComponent},
  {path:'students',component:StudentsComponent},
  {path:'todolist',component:Test2Component},
  {path:'addstudent',component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
