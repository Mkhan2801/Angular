import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import {userData} from './data/userData';
import { TaskComponent } from "./task/task.component";
import {taskData} from "./data/TaskData";
import { Task } from './task/task.model';
import {DetailsComponent} from "./details/details.component"

// import { NgFor,NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone:true,
  // imports : [NgFor,NgIf],
  imports: [RouterOutlet, HeaderComponent, UserComponent, TaskComponent,DetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-app';
  tasks = taskData;
  users = userData;
  
  selectUser =this.users[0];
  newRemark ='';
  taskId :number = 0
  userTaskId = false;
  paindingTasks = true;

  
  onSelect(id:string){
    this.selectUser = this.users.find((user)=>user.id===id)!;
  }

  onTaskComplet(task:Task){
    
    this.taskId = this.tasks.findIndex((selectedtask)=>selectedtask ===task)!;
    this.tasks[this.taskId].complite = true;
  }
  remarkAdded(id:string){
    
    this.taskId = this.tasks.findIndex((task)=>task.id===id)!;
    this.tasks[this.taskId].remark = this.newRemark;

  }
  onShowAllTasks(show:boolean){
    this.paindingTasks = show;
  }

  updateRemark(id:string){
    console.log(id)
  }
}
