
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetsComponent } from './assets.component';
import { AssetsRoutingModule } from './assets-routing.module';
import { MaterialModule } from '../utilities/material.module';
import { OverviewComponent } from './overview/overview.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PerformanceComponent } from './performance/performance.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        AssetsRoutingModule
    ],
    declarations: [
        AssetsComponent,
        OverviewComponent,
        PortfolioComponent,
        PerformanceComponent
    ]
})
export class AssetsModule { }
