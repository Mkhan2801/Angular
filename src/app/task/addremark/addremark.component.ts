import { Component,input, output } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-addremark',
  standalone:false,
  templateUrl: './addremark.component.html',
  styleUrl: './addremark.component.css'
})
export class AddremarkComponent {
  newRemark = output<Task>();
  task = input.required<Task>();
  removeRemarkDiv = output<void>();

addedRemark = '';

updateRemark(){
  this.task().remark=this.addedRemark
  this.newRemark.emit(this.task());
}

cancelRemark(){
  this.removeRemarkDiv.emit();
}
}
