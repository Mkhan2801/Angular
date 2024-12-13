import { Component,input,computed,output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { User } from '../user/user.model';
import { Task } from '../task/task.model';
import { TaskComponent } from '../task/task.component';
import { AddtaskComponent } from '../task/addtask/addtask.component';
import { TasksService } from '../service/Task.service';

@Component({
  selector: 'app-details',
  imports: [AddtaskComponent,DatePipe,TaskComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  constructor(private tasksService: TasksService) {}
 
  user = input.required<User>();
  newTaskAdd = false;
  allTasks =true;

  tasks (userId:string){
return this.tasksService.getUserTasks(userId) ;
  }

  showAllTasks = output<boolean>();
  
  imagestr = computed(()=>  "assets/users/" +this.user().avatar)

  addTask(){
    this.newTaskAdd =true;
  }

  onRemoveTask(){
    this.newTaskAdd=false;
  }

  onTaskComplet(task:Task){
    this.tasksService.complet(task.id)
  }

  allTask(){
    this.allTasks = !this.allTasks;
    this.showAllTasks.emit(this.allTasks)

  }
}
