import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppareilViewComponent } from './component/appareil-view/appareil-view.component';
import { BlogComponent } from './component/blog/blog.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {path: 'accueil', component: HomeComponent},
  // {path: 'blog', component: BlogComponent},
  // {path: 'appareil', component: AppareilViewComponent},
  { 
    path: 'appareil',
    loadChildren: () =>import('./component/appareil-view/appareil-view.module')
    .then(m => m.AppareilViewModule)
  },
  { 
    path: 'blog',
    loadChildren: () =>import('./component/blog/blog.module')
    .then(m => m.BlogModule)
  },
  {path: '', redirectTo: '/accueil', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
