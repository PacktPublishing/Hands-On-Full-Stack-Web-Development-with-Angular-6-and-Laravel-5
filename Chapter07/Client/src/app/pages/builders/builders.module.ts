import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuildersRoutingModule } from './builders-routing.module';
import { BuildersComponent } from './builders.component';

@NgModule({
  imports: [
    CommonModule,
    BuildersRoutingModule
  ],
  declarations: [BuildersComponent]
})
export class BuildersModule { }
