import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Device } from "src/app/data-models/model/device.model";
import { DeviceService } from "src/app/services/device.service";

@Component({
    selector: 'app-device-details',
    templateUrl: './device-details.component.html',
    styleUrls: ['./device-details.component.scss']
})
export class DeviceDetailsComponent implements OnInit {

    device: Device = {} as Device

    constructor(
        private route: ActivatedRoute,
        private deviceService: DeviceService
    ) { }

    ngOnInit(): void {
        this.loadDeviceData()
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
