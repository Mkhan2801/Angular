import { Component,input,computed,output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone:true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  avatar = input.required<string>();
  name = input.required<string>();
  id = input.required<string>();
  imagePath = computed(()=> "assets/users/" + this.avatar());
  select = output<string>();

  onSelectedUser(){
    this.select.emit(this.id());
  }

}
