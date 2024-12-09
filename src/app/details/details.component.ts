import { Component,input,computed } from '@angular/core';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

 
  name = input.required<string>();
  phone = input.required<string>();
  age = input.required<number>();
  avatar = input.required<string>();
  DOB = input.required<string>();

  imagestr = computed(()=>  "assets/users/" +this.avatar())

}
