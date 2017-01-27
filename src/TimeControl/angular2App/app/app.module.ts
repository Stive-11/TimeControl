import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SharedModule } from './modules/shared/shared.module';
import { HomeModule } from './modules/home/home.module';
import { ManagementModule } from './modules/management/management.module';
import { ReportsModule } from './modules/reports/reports.module';
import { AboutModule } from './modules/about/about.module';

import { Configuration } from './app.constants';
import { AppRoutes } from './app.routes';

import { AppComponent } from './app.component';


@NgModule({
    imports: [
        BrowserModule,
        AppRoutes,
        SharedModule.forRoot(),
        HomeModule,
        ManagementModule,
        ReportsModule,
        AboutModule
        
    ],

    declarations: [
        AppComponent
        
    ],

    bootstrap: [AppComponent],
})

export class AppModule { }