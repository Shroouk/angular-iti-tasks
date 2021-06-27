import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Student} from '../models/task';
import { HttpClient } from '@angular/common/http';
import{APIResponse} from '../models/response';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  students:Student[]=[];
  form:FormGroup=new FormGroup({});
  constructor(private formBuilder:FormBuilder,private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      FirstName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
      LastName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
      Mobile:['',[Validators.required,Validators.minLength(11),Validators.maxLength(11)]]
    })

   
  }

/* addStudent(){
  alert(JSON.stringify(this.form.value));
}
 */


addStudent(){
  let student:Student=new Student();
  student=this.form.value;
   
   this.httpClient.post<any>("http://api.mohamed-sadek.com/student/post",student).subscribe((response:APIResponse)=>{
       
     if(response.Success==true)
       {
         //alert(JSON.stringify(this.form.value));
         student.ID=response.Data; 
         this.students.unshift(student);
         alert("one student added");
       }
       else
       {
         alert(response.Message);
       }
      
     }
   )}

}
