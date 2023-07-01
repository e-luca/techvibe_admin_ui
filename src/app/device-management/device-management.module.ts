import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DeviceManagementListComponent } from "./device-management-list/device-management-list.component";
import { DeviceManagementRoutingModule } from "./device-management-routing.module";
import { CommonModule } from "@angular/common";
import { AddDeviceDialogComponent } from "./add-device-dialog/add-device-dialog.component";
import { DeviceService } from "../services/device.service";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DeviceDetailsComponent } from './device-details/device-details.component';
import { DeleteDeviceDialogComponent } from "./delete-device-dialog/delete-device-dialog.component";

@NgModule({
    declarations: [
        DeviceManagementListComponent,
        AddDeviceDialogComponent,
        DeleteDeviceDialogComponent,
        DeviceDetailsComponent
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
