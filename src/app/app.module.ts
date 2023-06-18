import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { DeviceManagementModule } from './device-management/device-management.module';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,

    DeviceManagementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
