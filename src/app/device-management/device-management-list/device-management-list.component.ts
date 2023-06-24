import { Component, OnInit } from "@angular/core";
import { AddDeviceDialogComponent } from "../add-device-dialog/add-device-dialog.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { DeviceService } from "src/app/services/device.service";
import { Device } from "src/app/data-models/model/device.model";
import { Page } from "src/app/data-models/model/page.model";
import { Router } from "@angular/router";

@Component({
    selector: 'app-device-management-list',
    templateUrl: './device-management-list.component.html',
    styleUrls: ['./device-management-list.component.scss']
})
export class DeviceManagementListComponent implements OnInit {
    devices: Device[] = []
    currentPage: number = 0
    totalPages: number = 0
    pageSize: number = 10

    constructor(
        private modalService: NgbModal,
        private deviceService: DeviceService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.getAllDevices(this.currentPage)
    }

    openAddDeviceModal(): void {
    this.modalService.open(AddDeviceDialogComponent, {
        scrollable: true,
        backdrop: 'static'
    })
    }

    goToDeviceDetails(device: Device): void {
        if (!device) return
        this.router.navigate(['device', device.id]).then()
    }

    private getAllDevices(page: number): void {
        this.deviceService.getAll(page, this.pageSize).subscribe({
            next: (data) => this.handleResponseData(data),
            error: (error) => {} 
        })
    }

    private handleResponseData(data: Page<Device>): void {
        this.devices = data.content
        this.currentPage = data.number
        this.totalPages = data.totalPages
        this.pageSize = data.size
        this.devices.forEach(device => device.type = device.type.replace('_', ' '))
    }
}
