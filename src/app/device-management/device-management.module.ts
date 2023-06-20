import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DeviceManagementListComponent } from "./device-management-list/device-management-list.component";
import { DeviceManagementRoutingModule } from "./device-management-routing.module";
import { CommonModule } from "@angular/common";
import { AddDeviceDialogComponent } from "./add-device-dialog/add-device-dialog.component";
import { DeviceService } from "../services/device.service";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    declarations: [
        DeviceManagementListComponent,
        AddDeviceDialogComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        DeviceManagementRoutingModule
    ],
    exports: [],
    providers: [DeviceService]
})
export class DeviceManagementModule { }
