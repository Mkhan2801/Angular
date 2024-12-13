import { Component, output,input } from '@angular/core';
import { DatePipe } from '@angular/common';
import {Task} from './task.model';
import { AddremarkComponent } from './addremark/addremark.component';
import { TasksService } from '../service/Task.service';
@Component({
  selector: 'app-task',
  standalone:true,
  imports: [AddremarkComponent,DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  task = input.required<Task>();
  complet = output<Task>();
  addremark = false;
  toUpdateTask = 0;

  
  constructor(private tasksService: TasksService) {}

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
this.tasksService.updateRemark(selectedTask.remark,selectedTask.id)
this.addremark =false
}
}
