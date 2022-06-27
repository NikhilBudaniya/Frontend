import { CompileIdentifierMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks:any;
  currentTask=null;
  currentIndex=-1;
  title='';

  constructor(private taskService:TaskService) { }

  ngOnInit() {
    this.readTasks()
  }
  readTasks(){
    this.taskService.readAll().subscribe({
     next: tasks=>{
        this.tasks=tasks;
        console.log(tasks);
      },
     error: error =>{
        console.log(error);
      }       
  });
  }

  refresh(){
    this.readTasks();
    this.currentTask=null;
    this.currentIndex=-1;
  }
  setCurrentTask(task:any,index:number){
    this.currentTask=task;
    this.currentIndex=index;
  }

  deleteAllTasks(){
    this.taskService.deleteAll().subscribe({
     next: response=>{
        console.log(response);
        this.readTasks();
      },
     error: error=>{
        console.log(error);
      }  
  });
  }

  searchByTitle(){
    this.taskService.searchByTitle(this.title).subscribe({
     next: tasks=>{
        this.tasks=tasks;
        console.log(tasks);
      },
     error: error=>{
        console.log(error);
      }
  });
  }

}
