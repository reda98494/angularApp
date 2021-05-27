import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { PostListComponent } from '../post-list/post-list.component';
import { PostListModule } from '../post-list/post-list.module';
import { RouterModule, Routes } from '@angular/router';


const routes : Routes = [
  {path:'',component: BlogComponent}
];

@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    CommonModule,
    PostListModule,
    [RouterModule.forChild(routes)]
  ],
  exports: [
    BlogComponent
  ]
})
export class BlogModule { }
