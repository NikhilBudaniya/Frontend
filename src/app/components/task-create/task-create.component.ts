import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {
  constructor(private taskService:TaskService , public datepipe:DatePipe) {
    
   }
  currentdate=this.datepipe.transform((new Date),'dd/MM/yyyy');
  task:any ={
    title:'',
    description:'',
    is_completed:false,
    date_created:this.currentdate ,
}
  submitted=false;
  

 

  ngOnInit(): void {
  }

  createTask() {
    const data ={
      title :this.task.title,
      description:this.task.description,
      is_completed:this.task.is_completed,
      date_created:this.task.date_created
    };
    this.taskService.create(data).subscribe({
    next:  response =>{
      console.log(response);
      this.submitted=true;
    },
    error:error=>{
      console.log(error);
    }
    
  });
  }

  newTask(){
    this.submitted=false;
    this.task={
      title:'',
      description:'',
      is_completed:false,
      date_created:this.currentdate ,
    };
  }

}
