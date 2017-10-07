
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { TimeSeriesComponent } from './time-series/time-series.component';
import { DistributionComponent } from './distribution/distribution.component';

const routes: Routes = [{
    path: '',
    component: DashboardComponent,
    children: [
        { path: '', redirectTo: 'time-series', pathMatch: 'full' },
        { path: 'time-series', component: TimeSeriesComponent },
        { path: 'distribution', component: DistributionComponent }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
