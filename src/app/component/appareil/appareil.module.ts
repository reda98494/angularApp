import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppareilComponent } from './appareil.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppareilComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    AppareilComponent
  ]
})
export class AppareilModule { }
