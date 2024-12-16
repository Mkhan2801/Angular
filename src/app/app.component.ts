import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import {userData} from './service/userData';
import { TasksService } from '../app/service/Task.service';
import { Task } from './task/task.model';
import {DetailsComponent} from "./details/details.component"
import { User } from './user/user.model';

// import { NgFor,NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  // imports : [NgFor,NgIf],
  standalone:false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private tasksService: TasksService) {}


  title = 'test-app';
  users = userData;
  
  selectUser! : User;
  paindingTasks = true;

  
  onSelect(id:string){
    this.selectUser = this.users.find((user)=>user.id===id)!;
  }

 

  onShowAllTasks(show:boolean){
    this.paindingTasks = show;
  }

  onNewTask(task:Task){
    this.tasksService.addTask(task);
  }
  
}
