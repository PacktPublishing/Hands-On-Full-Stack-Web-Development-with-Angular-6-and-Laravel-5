import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Bikes Routes Imports
import { BikeDetailComponent } from './bike-detail/bike-detail.component';
import { BikeListComponent } from './bike-list/bike-list.component';

const routes: Routes = [
  {
    path: 'bikes',
    children: [
      {
        path: '',
        component: BikeListComponent
      },
      {
        path: ':id',
        component: BikeDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BikesRoutingModule { }
