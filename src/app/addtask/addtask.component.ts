import { Component, input, output } from '@angular/core';
import{User} from '../user/user.model'
import { Task } from '../task/task.model';

@Component({
  selector: 'app-addtask',
  imports: [],
  templateUrl: './addtask.component.html',
  styleUrl: './addtask.component.css'
})
export class AddtaskComponent {
  userId = input.required<string>();

submitTask(){
console.log('test')
}

}
