import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DeviceModification } from "../data-models/model/device-modification.model";
import { Observable } from "rxjs";
import { Device } from "../data-models/model/device.model";
import { Page } from "../data-models/model/page.model";

@Injectable()
export class DeviceService {

    private BASE_URL = 'http://localhost:8080/api/admin/device-management'

    constructor(
        private http: HttpClient
    ) {}

    getAll(page: number, size: number): Observable<Page<Device>> {
        return this.http.get<Page<Device>>(this.BASE_URL)
    }

    getDevice(id: number): Observable<Device> {
        return this.http.get<Device>(this.BASE_URL + `/${id}`)
    }

    registerDevice(request: DeviceModification): Observable<Device> {
        return this.http.post<Device>(this.BASE_URL, request)
    }

    uploadCSVFile(file: File): Observable<void> {
        const formData = new FormData()
        formData.append('file', file)

        return this.http.post<void>(this.BASE_URL + '/csv', formData)
    }

    updateDevice(id: number, request: DeviceModification): Observable<Device> {
        return this.http.put<Device>(this.BASE_URL + `/${id}`, request)
    }

    deleteDevice(id: number): Observable<Device> {
        return this.http.delete<Device>(this.BASE_URL + `/${id}`)
    }
}
