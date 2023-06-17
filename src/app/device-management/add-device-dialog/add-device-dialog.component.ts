import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { DeviceType } from "src/app/data-models/enum/device-type.enum";
import { DeviceModification } from "src/app/data-models/model/device-modification.model";

@Component({
    selector: 'app-add-device-dialog',
    templateUrl: './add-device-dialog.component.html',
    styleUrls: ['./add-device-dialog.component.scss']
})
export class AddDeviceDialogComponent implements OnInit {
    
    deviceTypes = new Map<string, string>()
    deviceModelForm: FormGroup

    constructor(
        private activeModal: NgbActiveModal,
        private fb: FormBuilder
    ) { 
        this.deviceModelForm = this.fb.group({
            name: new FormControl('', [Validators.required]),
            type: new FormControl('', [Validators.required]),
            price: new FormControl(0, [Validators.required, Validators.pattern('\\-?\\d*\\.?\\d{1,2}')]),
            imageUrl: new FormControl('', [Validators.required]),
            shortDescription: new FormControl('', [Validators.required]),
            longDescription: new FormControl('', [Validators.required]),
            available: new FormControl(false)
        })
    }

    ngOnInit(): void {
        Object.keys(DeviceType).forEach((key, index) => this.deviceTypes.set(key, Object.values(DeviceType)[index]))
    }

    close(): void {
        this.activeModal.close(false)
    }

    register(): void {
        if(this.deviceModelForm.invalid) return

        const request = Object.assign(new DeviceModification(), this.deviceModelForm.value)
    }
}