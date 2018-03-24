import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';


import { AppComponent } from './app.component';
import { BusDetailsComponent } from './bus-details/bus-details.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BusListComponent } from './bus-list/bus-list.component';
import { LocationsComponent } from './locations/locations.component';

import { BusService } from './services/bus/bus.service';


@NgModule({
  declarations: [
    AppComponent,
    BusDetailsComponent,
    DashboardComponent,
    BusListComponent,
    LocationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ BusService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
