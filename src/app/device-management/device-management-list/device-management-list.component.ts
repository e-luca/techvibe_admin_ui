import { Component } from "@angular/core";
import { AddDeviceDialogComponent } from "../add-device-dialog/add-device-dialog.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-device-management-list',
    templateUrl: './device-management-list.component.html',
    styleUrls: ['./device-management-list.component.scss']
})
export class DeviceManagementListComponent {
    devices: any[] = []

    constructor(
        private modalService: NgbModal
    ) { }

    openAddDeviceModal(): void {
    this.modalService.open(AddDeviceDialogComponent, {
        scrollable: true,
        backdrop: 'static'
    })
    }
}
