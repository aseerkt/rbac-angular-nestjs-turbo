import { Routes } from '@angular/router';

export default [
  {
    path: 'roles',
    loadChildren: () => import('./roles/roles.routes'),
  },
  {
    path: 'permissions',
    loadChildren: () => import('./permissions/permissions.routes'),
  },
] as Routes;
