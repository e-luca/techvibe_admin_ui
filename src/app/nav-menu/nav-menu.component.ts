import { Component, OnInit } from "@angular/core";
import { NavItem } from './model/nav-item.model';
import { AppConstants } from '../app.constants';
import { Router } from "@angular/router";

@Component({
    selector: 'app-nav-menu',
    templateUrl: './nav-menu.component.html',
    styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
    menuItems: NavItem[] = this.constants.NavMenuItems

    constructor(
        private constants: AppConstants,
        private router: Router
    ) { }

    ngOnInit(): void {
    }

    selectItem(item: NavItem): void {
        if (item.active) return

        const currentActive = this.menuItems.find(menuItem => menuItem.active)
        if (currentActive) currentActive.active = false

        item.active = true
        this.router.navigate([item.url]).then()
    }
}