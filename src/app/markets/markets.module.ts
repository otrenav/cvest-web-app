
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketsRoutingModule } from './markets-routing.module';
import { MaterialModule } from '../utilities/material.module';
import { MarketsComponent } from './markets.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        MarketsRoutingModule
    ],
    declarations: [MarketsComponent]
})
export class MarketsModule { }
