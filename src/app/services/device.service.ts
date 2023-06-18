import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DeviceModification } from "../data-models/model/device-modification.model";
import { Observable } from "rxjs";
import { Device } from "../data-models/model/device.model";

@Injectable()
export class DeviceService {

    private BASE_URL = 'http://localhost:8080/api/admin/device-management'

    constructor(
        private http: HttpClient
    ) {}

    registerDevice(request: DeviceModification): Observable<Device> {
        return this.http.post<Device>(this.BASE_URL, request)
    }
}
