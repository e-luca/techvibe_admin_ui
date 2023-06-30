import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { DeviceType } from "src/app/data-models/enum/device-type.enum";
import { DeviceModification } from "src/app/data-models/model/device-modification.model";
import { Device } from "src/app/data-models/model/device.model";
import { DeviceService } from "src/app/services/device.service";

@Component({
    selector: 'app-add-device-dialog',
    templateUrl: './add-device-dialog.component.html',
    styleUrls: ['./add-device-dialog.component.scss']
})
export class AddDeviceDialogComponent implements OnInit {
    
    @Input() device = {} as Device

    deviceTypes = new Map<string, string>()
    deviceModelForm: FormGroup
    editMode: boolean = false

    constructor(
        private activeModal: NgbActiveModal,
        private deviceService: DeviceService,
        private fb: FormBuilder
    ) { 
        this.deviceModelForm = this.fb.group({
            name: new FormControl('', [Validators.required]),
            type: new FormControl('', [Validators.required]),
            price: new FormControl(0, [Validators.required, Validators.pattern('\\-?\\d*\\.?\\d{1,2}')]),
            imageUrl: new FormControl('', [Validators.required]),
            shortDescription: new FormControl('', [Validators.required]),
            longDescription: new FormControl('', [Validators.required]),
            available: new FormControl(true)
        })
    }

    ngOnInit(): void {
        Object.keys(DeviceType).forEach((key, index) => this.deviceTypes.set(key, Object.values(DeviceType)[index]))
        this.editMode = this.device.id !== undefined
        if (this.editMode) this.loadData()
    }

    close(): void {
        this.activeModal.close(null)
    }

    submit(): void {
        if(this.deviceModelForm.invalid) return

        const request: DeviceModification = Object.assign(new DeviceModification(), this.deviceModelForm.value)
        const typeValue = Array.from(this.deviceTypes.keys()).find(key => this.deviceTypes.get(key) === this.deviceModelForm.get('type')?.value)
        request.type = typeValue || ''

        const action = this.editMode 
                        ? this.deviceService.updateDevice(this.device.id, request) 
                        : this.deviceService.registerDevice(request)

        action.subscribe({
            next: (data) => { this.handleResponse(data) },
            error: (error) => { this.handleErrorResponse(error) }
        })
    }

    private loadData(): void {
        const deviceObject = { ...this.device }
        deviceObject.type = this.deviceTypes.get(deviceObject.type.replace(' ', '_')) || ''
        this.deviceModelForm.patchValue(deviceObject)
    }

    private handleResponse(data: Device): void {
        this.activeModal.close(data)
    }

    private handleErrorResponse(error: any): void {

    }
}