import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';


const routes: Routes = [{
  path: 'parent',
  redirectTo: 'parent/home',
  pathMatch: 'full'
},
{
  path: 'parent/home',
  component: HomeComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ParentRoutingModule { }
