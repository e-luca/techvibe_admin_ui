import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Device } from "src/app/data-models/model/device.model";
import { DeviceService } from "src/app/services/device.service";
import { AddDeviceDialogComponent } from "../add-device-dialog/add-device-dialog.component";
import { Location } from "@angular/common";
import { DeleteDeviceDialogComponent } from "../delete-device-dialog/delete-device-dialog.component";

@Component({
    selector: 'app-device-details',
    templateUrl: './device-details.component.html',
    styleUrls: ['./device-details.component.scss']
})
export class DeviceDetailsComponent implements OnInit {

    device: Device = {} as Device

    constructor(
        private route: ActivatedRoute,
        private deviceService: DeviceService,
        private modalService: NgbModal,
        private location: Location,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.loadDeviceData()
    }

    openEditModal(): void {
        const modalRef = this.modalService.open(AddDeviceDialogComponent, {
            scrollable: true,
            backdrop: 'static'
        })
        modalRef.componentInstance.device = this.device
        modalRef.closed.subscribe(data => {
            if (!data) return
            this.device = data
        })
    }

    openDeleteModal(): void {
        const modalRef = this.modalService.open(DeleteDeviceDialogComponent, {
            backdrop: 'static'
        })
        modalRef.componentInstance.device = this.device
        modalRef.closed.subscribe(data => {
            if (!data) return
            this.router.navigate(['device-management'])
        })
    }

    back(): void {
        this.location.back()
    }

    private loadDeviceData(): void {
        let deviceId: number 
        this.route.paramMap.subscribe(params => {
            deviceId = parseInt(params.get('id') || '0', 10)
            if (!deviceId) return
            this.deviceService.getDevice(deviceId).subscribe(data => {
                this.device = data
                this.device.type = this.device.type.replace('_', ' ')
            })
        })

    }
}
