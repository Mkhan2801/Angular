import { Component, input, output } from '@angular/core';
import { Task } from '../task.model';
import { FormsModule } from '@angular/forms';
import { taskData } from '../../data/TaskData';

@Component({
  selector: 'app-addtask',
  imports: [FormsModule],
  templateUrl: './addtask.component.html',
  styleUrl: './addtask.component.css'
})
export class AddtaskComponent {
  userId = input.required<string>();
  removeTaskDiv = output<void>();

  newTask! :Task

  taskTitle =''
  taskContent = ''
  taskRemark = ''

submitTask(){
this.newTask = {
  id:new Date().toString(),
  uid:this.userId(),
  tital:this.taskTitle,
  content:this.taskContent,
  remark:this.taskRemark,
  date:new Date().toString(),
  complite :false
}
taskData.unshift(this.newTask)
this.calcelNewTask()
}

calcelNewTask(){
this.removeTaskDiv.emit();
}

}
