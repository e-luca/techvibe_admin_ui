import { Component } from "@angular/core";

@Component({
    selector: 'app-device-management-list',
    templateUrl: './device-management-list.component.html',
    styleUrls: ['./device-management-list.component.scss']
})
export class DeviceManagementListComponent {
    devices: any[] = []
}
