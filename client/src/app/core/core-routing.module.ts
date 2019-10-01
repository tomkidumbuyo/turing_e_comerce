import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [{
    path: 'home',
    redirectTo: 'login',
    pathMatch: 'full'
}, {
    path: 'dashboard',
    component: DashboardComponent
}
, {
    path: '**',
    component: NotFoundComponent
}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }
