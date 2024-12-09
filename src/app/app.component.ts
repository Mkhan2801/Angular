import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import {userData} from './data/userData';
import { DetailsComponent } from "./details/details.component";

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, DetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-app';
  user = userData;
  
  selectUser =this.user[0];
  
  onSelect(id:string){

    this.selectUser = this.user.find((user)=>user.id===id)!;
  }
}
