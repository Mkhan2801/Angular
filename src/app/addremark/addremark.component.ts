import { Component,input, output } from '@angular/core';
import { Task } from '../task/task.model';
import { taskData } from '../data/TaskData';

@Component({
  selector: 'app-addremark',
  imports: [],
  templateUrl: './addremark.component.html',
  styleUrl: './addremark.component.css'
})
export class AddremarkComponent {
  getId = output<string>();
  task = input.required<Task>();

submitRemark(){
  
  this.getId.emit(this.task().id);
}
}
