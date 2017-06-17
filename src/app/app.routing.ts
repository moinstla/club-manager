import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { MemberComponent } from './member/member.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AboutComponent
  },
  {
    path: 'member',
    component: MemberComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'members/:id',
    component: MemberDetailComponent
  },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
