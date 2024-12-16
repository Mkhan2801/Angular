import { NgModule }  from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { FormsModule } from "@angular/forms";
import { DetasilsModule } from "./details/details.module";



@NgModule ({
    declarations:[AppComponent,HeaderComponent, UserComponent],
    bootstrap:[AppComponent],
    imports:[BrowserModule,FormsModule,DetasilsModule]
})

export class AppModule{};