import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import {userData} from './data/userData';
import { DetailsComponent } from "./details/details.component";
import { TaskComponent } from "./task/task.component";
import {taskData} from "./data/TaskData"
import { AddtaskComponent } from "./addtask/addtask.component";
import { AddremarkComponent } from './addremark/addremark.component';
// import { NgFor,NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone:true,
  // imports : [NgFor,NgIf],
  imports: [RouterOutlet, HeaderComponent, UserComponent, DetailsComponent, TaskComponent, AddtaskComponent,AddremarkComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-app';
  tasks = taskData;
  users = userData;
  
  selectUser =this.users[0];
  selectTask =this.tasks[0];
  taskId = '';
  userTaskId = '';
  onSelect(id:string){
    this.selectUser = this.users.find((user)=>user.id===id)!;
  }

  done(id:string){
    
    this.taskId = this.tasks.find((task)=>task.id ===id)?.id!;
    console.log(this.taskId);
    // this.tasks.at(this.compTask)?.complite = true;

  }
  remarkAdded(id:string){
    
    this.selectTask = this.tasks.find((task)=>task.id===id)!;

  }
  
  updateRemark(id:string){
    
    console.log(id)

  }
  newTask(id:string){
    this.userTaskId = this.users.find((user)=>user.id===id)?.id!;
    console.log(this.userTaskId)
  }
}
