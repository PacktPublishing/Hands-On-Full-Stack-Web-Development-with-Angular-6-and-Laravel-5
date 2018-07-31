import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { BikesRoutingModule } from './bikes-routing.module';
import { BikesComponent } from './bikes.component';
import { BikeDetailComponent } from './bike-detail/bike-detail.component';
import { BikeListComponent } from './bike-list/bike-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BikeSearchPipe } from './_pipes/bike-search.pipe';

@NgModule({
  imports: [
    CommonModule,
    BikesRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [BikesComponent, BikeDetailComponent, BikeListComponent, BikeSearchPipe]
})
export class BikesModule { }
