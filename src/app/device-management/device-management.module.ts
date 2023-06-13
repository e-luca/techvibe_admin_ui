import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DeviceManagementListComponent } from "./device-management-list/device-management-list.component";
import { DeviceManagementRoutingModule } from "./device-management-routing.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        DeviceManagementListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        DeviceManagementRoutingModule
    ],
    exports: []
})
export class DeviceManagementModule { }
