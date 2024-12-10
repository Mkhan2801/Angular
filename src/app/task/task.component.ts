import { Component, output,input } from '@angular/core';
import {Task} from './task.model';
@Component({
  selector: 'app-task',
  standalone:true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  task = input.required<Task>();
  complet = output<string>();
  addremark = output<string>();
completed(){
  this.complet.emit(this.task().id);
}
remark(){
  this.addremark.emit(this.task().id);
}
}
