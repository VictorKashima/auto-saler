import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleListRoutingModule } from './vehicle-list-routing.module';
import { VehicleListComponent } from './vehicle-list.component';


@NgModule({
  declarations: [
    VehicleListComponent
  ],
  imports: [
    CommonModule,
    VehicleListRoutingModule
  ]
})
export class VehicleListModule { }