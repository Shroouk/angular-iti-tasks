import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{APIResponse} from '../models/response';
import {Task} from './test2';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  tasks:Task[]=[];
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<any>("http://api.mohamed-sadek.com/task/get").subscribe((response:APIResponse)=>{
      this.tasks=response.Data;
    }
    ,error=>{
      alert("Error ")
    }
    );
   
  }


  addTask(Title:string)
  {
    
    let task:Task=new Task();
    task.Title=Title;
    
    this.httpClient.post<any>("http://api.mohamed-sadek.com/task/post",task).subscribe((response:APIResponse)=>{
        
      if(response.Success==true)
        {
          task.ID=response.Data;
          if(Title!=''){
            this.tasks.push(task);
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

  getPendingTask(){
    return this.tasks.filter(x=>!x.IsDone).length;
  }

  changeStatus(item:Task)
  {
    item.IsDone=!item.IsDone;
    this.httpClient.put<any>("http://api.mohamed-sadek.com/task/put",item).subscribe((response:APIResponse)=>{
      alert("Task Done");
    });
   
  }

  removeTask(index:number){
    let task=this.tasks[index];
    this.httpClient.delete<any>(`http://api.mohamed-sadek.com/task/delete?id=${task.ID}`).subscribe((response:APIResponse)=>{
      this.tasks.splice(index,1);
    });
    
  }

 

}
