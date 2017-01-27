import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { ManagementRoutes } from './management.routes';
import { ManagementComponent } from './components/management.component';
import { ManagementService } from './../../services/managementService';

@NgModule({
    imports: [
        CommonModule,
        ManagementRoutes,
        FormsModule,
        HttpModule
    ],

    declarations: [
        ManagementComponent
    ],
    exports: [
        ManagementComponent
    ],
    providers: [ManagementService]
})

export class ManagementModule { }