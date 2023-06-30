import { Injectable } from "@angular/core";
import { NavItem } from './nav-menu/model/nav-item.model';

@Injectable({
    providedIn: 'root'
})
export class AppConstants {
    public NavMenuItems: NavItem[] = [
        new NavItem('Device Management', 'device-management', false),
        new NavItem('User Management', 'user-management', false)
    ]
}
