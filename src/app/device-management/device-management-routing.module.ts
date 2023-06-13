import { RouterModule, Routes } from "@angular/router";
import { DeviceManagementListComponent } from "./device-management-list/device-management-list.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: '',
        component: DeviceManagementListComponent
    }
]

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class DeviceManagementRoutingModule { }
