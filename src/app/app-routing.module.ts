import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
  // {path: 'accueil', component: HomeComponent},
  // {path: 'blog', component: BlogComponent},
  // {path: 'appareil', component: AppareilViewComponent},
  { 
    path: 'authentification',
    loadChildren: () =>import('./component/auth-component/auth-component.module')
    .then(m => m.AuthComponentModule)
  },
  { 
    path: 'appareil',canActivate : [AuthGuardService],
    loadChildren: () =>import('./component/appareil-view/appareil-view.module')
    .then(m => m.AppareilViewModule)
  },
  { 
    path: 'appareil/:id',canActivate : [AuthGuardService],
    loadChildren: () =>import('./component/single-appareil/single-appareil.module')
    .then(m => m.SingleAppareilModule)
  },
  { 
    path: 'blog',canActivate : [AuthGuardService],
    loadChildren: () =>import('./component/blog/blog.module')
    .then(m => m.BlogModule)
  },
  {path: '', redirectTo: '/authentification', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
