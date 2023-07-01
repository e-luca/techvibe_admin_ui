import { Component, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Device } from "src/app/data-models/model/device.model";
import { DeviceService } from "src/app/services/device.service";

@Component({
    selector: 'app-delete-device-dialog',
    templateUrl: './delete-device-dialog.component.html',
    styleUrls: ['./delete-device-dialog.component.scss']
})
export class DeleteDeviceDialogComponent {

    @Input() device = {} as Device

    constructor(
        private activeModal: NgbActiveModal,
        private deviceService: DeviceService
    ) { }

    delete(): void {
        if (!this.device.id) return
        this.deviceService.deleteDevice(this.device.id).subscribe({
            next: (data) => this.handleResponse(data),
            error: (err) => this.handleError()
        })
    }

    cancel(): void {
        this.activeModal.close(null)
    }

    private handleResponse(data: Device): void {
        this.activeModal.close(data)
    }

    private handleError():void {}
}
