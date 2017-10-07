
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { TimeSeriesComponent } from './time-series/time-series.component';
import { DistributionComponent } from './distribution/distribution.component';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule
    ],
    declarations: [
        DashboardComponent,
        TimeSeriesComponent,
        DistributionComponent
    ]
})
export default class DashboardModule { }
