import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () =>
      import('./roles-list/roles-list.component').then(
        m => m.RolesListComponent,
      ),
  },
  {
    path: 'add',
    loadComponent: () =>
      import('./roles-add-edit/roles-add-edit.component').then(
        m => m.RolesAddEditComponent,
      ),
  },
] as Routes;
