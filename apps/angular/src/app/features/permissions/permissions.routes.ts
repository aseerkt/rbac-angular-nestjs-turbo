import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () =>
      import('./permissions-list/permissions-list.component').then(
        m => m.PermissionsList,
      ),
  },
] as Routes;
