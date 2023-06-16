import { Component } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-add-device-dialog',
    templateUrl: './add-device-dialog.component.html',
    styleUrls: ['./add-device-dialog.component.scss']
})
export class AddDeviceDialogComponent {
    
    constructor(
        private activeModal: NgbActiveModal
    ) { }
}