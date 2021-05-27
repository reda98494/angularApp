import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list.component';
import { PostListItemModule } from '../post-list-item/post-list-item.module';



@NgModule({
  declarations: [
    PostListComponent
  ],
  imports: [
    CommonModule,
    PostListItemModule
  ],
  exports: [
    PostListComponent
  ]
})
export class PostListModule { }
