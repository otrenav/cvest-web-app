
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from './utilities/material.module';
import { TimerService } from './utilities/timer.service';
import { AssetsService } from './assets/assets.service';
import { UserService } from './user/user.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        // Must be after BrowserModule
        BrowserAnimationsModule,
        HttpClientModule,
        MaterialModule
    ],
    providers: [
        AssetsService,
        TimerService,
        UserService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
