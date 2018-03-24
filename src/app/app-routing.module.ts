import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { BusListComponent }   from './bus-list/bus-list.component'
import { BusDetailsComponent }   from './bus-details/bus-details.component'
import { LocationsComponent }   from './locations/locations.component'


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'buses', component: BusListComponent },
  { path: 'buses-available', component: LocationsComponent },
  { path: 'buses/detail/:id', component: BusDetailsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
