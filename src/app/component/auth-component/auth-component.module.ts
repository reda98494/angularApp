import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponentComponent } from './auth-component.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {path:'',component: AuthComponentComponent}
];

@NgModule({
  declarations: [
    AuthComponentComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ],
  exports:[
    AuthComponentComponent
  ]
})
export class AuthComponentModule { }
