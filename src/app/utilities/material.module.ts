
import { NgModule } from '@angular/core';
import {
    MatCardModule,
    MatTableModule,
    MatToolbarModule,
    MatGridListModule,
    MatExpansionModule
} from '@angular/material';

@NgModule({
    imports: [
        MatCardModule,
        MatTableModule,
        MatToolbarModule,
        MatGridListModule,
        MatExpansionModule
    ],
    exports: [
        MatCardModule,
        MatTableModule,
        MatToolbarModule,
        MatGridListModule,
        MatExpansionModule
    ]
})
export class MaterialModule { }
