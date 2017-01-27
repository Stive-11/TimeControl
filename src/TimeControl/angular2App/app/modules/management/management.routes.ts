import { Routes, RouterModule } from '@angular/router';

import { ManagementComponent } from './components/management.component';

const routes: Routes = [
    { path: 'management', component: ManagementComponent }
];

export const ManagementRoutes = RouterModule.forChild(routes);