import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarrosselComponent } from './home/carrossel/carrossel.component';
import { HeaderComponent } from './header/header.component';
import { DestaqueComponent } from './home/carrossel/destaque/destaque.component';
import { EventosComponent } from './eventos/eventos.component';
import { BannerComponent } from './eventos/banner/banner.component';
import { ResultadoComponent } from './eventos/resultado/resultado.component';
import { EventoComponent } from './eventos/resultado/evento/evento.component';
import { CategoriasComponent } from './home/categorias/categorias.component';
import { CategoriaComponent } from './home/categorias/categoria/categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarrosselComponent,
    HeaderComponent,
    DestaqueComponent,
    EventosComponent,
    BannerComponent,
    ResultadoComponent,
    EventoComponent,
    CategoriasComponent,
    CategoriaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
