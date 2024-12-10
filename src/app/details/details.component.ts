import { Component,input,computed,output } from '@angular/core';
import { User } from '../user/user.model';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

 
  user = input.required<User>();
  taskAdd = output<string>();

  imagestr = computed(()=>  "assets/users/" +this.user().avatar)

  addTask(){
    this.taskAdd.emit(this.user().id);
  }
}
