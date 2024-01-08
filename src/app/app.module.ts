import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { VehicleListModule } from './views/vehicles/vehicle-list/vehicle-list.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VehicleListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
