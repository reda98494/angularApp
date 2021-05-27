import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import localeFr from '@angular/common/locales/fr';

import { PostListComponent } from './component/post-list/post-list.component';
import { PostListItemComponent } from './component/post-list-item/post-list-item.component';
import { HomeComponent } from './component/home/home.component';
import { AppareilViewModule } from './component/appareil-view/appareil-view.module';
import { PostListModule } from './component/post-list/post-list.module';
import { PostListItemModule } from './component/post-list-item/post-list-item.module';
import { BlogModule } from './component/blog/blog.module';



registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppareilViewModule,
    BlogModule

  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
