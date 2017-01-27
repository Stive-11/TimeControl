import { Routes, RouterModule } from '@angular/router';
import { ReportsComponent } from './modules/reports/components/reports.component';
import { ManagementComponent } from './modules/management/components/management.component';
import { AboutComponent } from './modules/about/components/about.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'management', component: ManagementComponent },
    { path: 'reports', component: ReportsComponent },
    { path: 'about', component: AboutComponent}
];

export const AppRoutes = RouterModule.forRoot(routes);
