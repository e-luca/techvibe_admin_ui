import { RouterModule, Routes } from "@angular/router";
import { DeviceManagementListComponent } from "./device-management-list/device-management-list.component";
import { NgModule } from "@angular/core";
import { DeviceDetailsComponent } from "./device-details/device-details.component";

const routes: Routes = [
    {
        path: '',
        component: DeviceManagementListComponent
    }, 
    {
        path: 'device/:id',
        component: DeviceDetailsComponent
    }
]

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class DeviceManagementRoutingModule { }
