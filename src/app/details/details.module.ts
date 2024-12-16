import { NgModule } from "@angular/core";
import { AddtaskComponent } from "../task/addtask/addtask.component";
import { FormsModule } from "@angular/forms";
import { DetailsComponent } from "./details.component";
import { CommonModule } from "@angular/common";
import { TaskComponent } from "../task/task.component";
import { AddremarkComponent } from "../task/addremark/addremark.component";

@NgModule({
    declarations: [DetailsComponent, AddtaskComponent, TaskComponent, AddremarkComponent],
    imports: [FormsModule, CommonModule],
    exports:[DetailsComponent]
})
export class DetasilsModule { };