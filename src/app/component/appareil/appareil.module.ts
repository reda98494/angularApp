import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppareilComponent } from './appareil.component';



@NgModule({
  declarations: [
    AppareilComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AppareilComponent
  ]
})
export class AppareilModule { }
