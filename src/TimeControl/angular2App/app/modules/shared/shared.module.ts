import { Configuration } from './../../app.constants';
import { ReportService } from './../../services/reportsService';
import { DataService } from './../../services/dataService';
import { ManagementService } from "../../services/managementService";
import { CustomFooterComponent } from './components/customfooter/customfooter.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({

    imports: [
        CommonModule,
        RouterModule
    ],

    declarations: [
        NavigationComponent,
        CustomFooterComponent
    ],

    exports: [
        NavigationComponent,
        CustomFooterComponent
    ]
})

export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                ReportService,
                DataService,
                ManagementService,
                Configuration
            ]
        };
    }
}