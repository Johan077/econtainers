import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListHeroComponent } from './list-hero/list-hero.component';
import { DetailHeroComponent } from './detail-hero/detail-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    ListHeroComponent,
    DetailHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
