import { Component, output,input } from '@angular/core';
import {Task} from './task.model';
import { AddremarkComponent } from './addremark/addremark.component';
import { taskData } from '../data/TaskData';
@Component({
  selector: 'app-task',
  standalone:true,
  imports: [AddremarkComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  task = input.required<Task>();
  complet = output<Task>();
  addremark = false;
  toUpdateTask = 0;

completed(){
  this.complet.emit(this.task());
}
remark(){
  this.addremark = true;
}
oncencelRemark(){
this.addremark =false
}

onUpdateRemark(selectedTask:Task){
this.toUpdateTask = taskData.findIndex((task)=>task.id===selectedTask.id)!
taskData[this.toUpdateTask].remark = selectedTask.remark
this.addremark =false
}
}
