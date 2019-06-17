import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleLookupComponent } from './schedule-lookup/schedule-lookup.component';

const routes: Routes = [
  {
    path: 'scheduling',
    component: ScheduleLookupComponent
  },
  {
    path: '',
    redirectTo: 'scheduling',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
