import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarrosselComponent } from './home/carrossel/carrossel.component';
import { HeaderComponent } from './home/carrossel/header/header.component';
import { DestaqueComponent } from './home/carrossel/destaque/destaque.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarrosselComponent,
    HeaderComponent,
    DestaqueComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
