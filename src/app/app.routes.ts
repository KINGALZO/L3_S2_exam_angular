import { Routes } from '@angular/router';
import { ClientDashboardComponent } from './features/dashboard/client-dashboard.component';
import { AgentDashboardComponent } from './features/dashboard/agent-dashboard.component';

export const routes: Routes = [
  { path: '', component: ClientDashboardComponent },
  { path: 'dashboard', component: ClientDashboardComponent },
  { path: 'admin/wallets', component: AgentDashboardComponent },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];
