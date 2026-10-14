import { Route } from '@angular/router';
import { loadRemote } from '@module-federation/enhanced/runtime';
import { Home } from './home/home';

export const appRoutes: Route[] = [
  {
    path: '',
    component: Home
  },
  {
    path: 'users',
    loadChildren: () => loadRemote<typeof import('mfeUsers/Routes')>('mfeUsers/Routes').then(m => m!.remoteRoutes)
  },
  {
    path: 'products',
    loadChildren: () => loadRemote<typeof import('mfeProducts/Routes')>('mfeProducts/Routes').then(m => m!.remoteRoutes)
  },
];
