import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'contactmanager', loadChildren: () => import("./contactmanager/contactmanager.routes").then(r => r.CONTACTMANAGER_ROUTES) },
    { path: '**', redirectTo: 'contactmanager' }
];