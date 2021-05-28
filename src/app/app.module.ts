import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import localeFr from '@angular/common/locales/fr';
import { HomeComponent } from './component/home/home.component';
import { AppareilViewModule } from './component/appareil-view/appareil-view.module';
import { BlogModule } from './component/blog/blog.module';
import { AuthComponentModule } from './component/auth-component/auth-component.module';
import { SingleAppareilModule } from './component/single-appareil/single-appareil.module';
import { ErrorModule } from './component/error/error.module';



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
    BlogModule,
    AuthComponentModule,
    SingleAppareilModule,
    ErrorModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
