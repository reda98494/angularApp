import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleAppareilComponent } from './single-appareil.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {path:'',component: SingleAppareilComponent}
];

@NgModule({
  declarations: [
    SingleAppareilComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ],
  exports:[
    SingleAppareilComponent
  ]
})
export class SingleAppareilModule { }
