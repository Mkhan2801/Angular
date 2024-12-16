import { Component,input,computed,output } from '@angular/core';
import {User} from './user.model';
@Component({
  selector: 'app-user',
  standalone:false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user  = input.required<User>()
  imagePath = computed(()=> "assets/users/" + this.user().avatar);
  select = output<string>();

  onSelectedUser(){
    this.select.emit(this.user().id);
  }

 

}
