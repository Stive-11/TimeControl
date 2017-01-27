import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { ReportsRoutes } from './reports.routes';
import { ReportsComponent } from './components/reports.component';
import { ReportService } from './../../services/reportsService';

@NgModule({
    imports: [
        CommonModule,
        ReportsRoutes,
        FormsModule,
        HttpModule
    ],

    declarations: [
        ReportsComponent
    ],
    exports: [
        ReportsComponent
    ],
    providers: [ReportService]
})

export class ReportsModule { }