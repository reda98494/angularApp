import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppareilViewComponent } from './appareil-view.component';
import { AppareilModule } from '../appareil/appareil.module';
import { RouterModule, Routes } from '@angular/router';


const routes : Routes = [
  {path:'',component: AppareilViewComponent}
];

@NgModule({
  declarations: [
    AppareilViewComponent,    
  ],
  imports: [
    CommonModule,
    AppareilModule,
    
    [RouterModule.forChild(routes)]
  ],
  exports: [
    AppareilViewComponent
  ]
})
export class AppareilViewModule { }
