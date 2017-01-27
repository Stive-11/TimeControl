import { Routes, RouterModule } from '@angular/router';

import { ReportsComponent } from './components/reports.component';

const routes: Routes = [
    { path: 'reports', component: ReportsComponent }
];

export const ReportsRoutes = RouterModule.forChild(routes);