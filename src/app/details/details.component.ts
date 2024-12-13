import { Component,input,computed,output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { User } from '../user/user.model';
import { AddtaskComponent } from '../task/addtask/addtask.component';

@Component({
  selector: 'app-details',
  imports: [AddtaskComponent,DatePipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

 
  user = input.required<User>();
  newTaskAdd = false;
  allTasks =true;
  showAllTasks = output<boolean>();
  
  imagestr = computed(()=>  "assets/users/" +this.user().avatar)

  addTask(){
    this.newTaskAdd =true;
  }

  onRemoveTask(){
    this.newTaskAdd=false;
  }

  

  allTask(){
    this.allTasks = !this.allTasks;
    this.showAllTasks.emit(this.allTasks)

  }
}
