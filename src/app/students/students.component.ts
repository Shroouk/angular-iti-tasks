import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
//import {Student} from './student';
import {Student} from '../models/task';
import{APIResponse} from '../models/response';



@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students:Student[]=[];
 
  constructor(private httpClient:HttpClient) { 
    
  }

  ngOnInit(): void {

   


    this.httpClient.get<any>("http://api.mohamed-sadek.com/student/get").subscribe((response:APIResponse)=>{
      this.students=response.Data;
    }
    ,error=>{
      alert("Error ")
    }
    );
  }
  addStudent(FirstName:string,LastName:string, Mobile:string)
  {
    
    let student:Student=new Student();
    student.FirstName=FirstName;
    student.LastName=LastName; 
    student.Name=FirstName+" "+LastName
    student.Mobile= Mobile;


    this.httpClient.post<any>("http://api.mohamed-sadek.com/student/post",student).subscribe((response:APIResponse)=>{
        
      if(response.Success==true)
        {
          student.ID=response.Data;
          if(FirstName!='' && LastName!='' &&  Mobile!=''){
            //alert(JSON.stringify(student));
            this.students.unshift(student);
          }
        }
        else
        {
          alert(response.Message);
        }
       
      }
      ,error=>{
        alert("Sorry error occurred");
      });


    
    
  }


  removeStudent(index:number)
  {
    let student=this.students[index];
    this.httpClient.delete<any>(`http://api.mohamed-sadek.com/student/delete?id=${student.ID}`).subscribe((response:APIResponse)=>{
      this.students.splice(index, 1);
    });
    
  }

  


}
