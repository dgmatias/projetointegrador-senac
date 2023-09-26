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
import { EventoInfoComponent } from './evento-info/evento-info.component';
import { BannerInfoComponent } from './evento-info/banner-info/banner-info.component';
import { InfoComponent } from './evento-info/info/info.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HeaderCheckoutComponent } from './checkout/header-checkout/header-checkout.component';
import { TableCheckoutComponent } from './checkout/table-checkout/table-checkout.component';
import { FormCheckoutComponent } from './checkout/form-checkout/form-checkout.component';
import { Form1Component } from './checkout/form-checkout/form1/form1.component';
import { CarteiraComponent } from './carteira/carteira.component';
import { CarteiraHeaderComponent } from './carteira/carteira-header/carteira-header.component';
import { CarteiraOptionsComponent } from './carteira/carteira-options/carteira-options.component';
import { CardCarteiraComponent } from './carteira/card-carteira/card-carteira.component';


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
    EventoInfoComponent,
    BannerInfoComponent,
    InfoComponent,
    CheckoutComponent,
    HeaderCheckoutComponent,
    TableCheckoutComponent,
    FormCheckoutComponent,
    Form1Component,
    CarteiraComponent,
    CarteiraHeaderComponent,
    CarteiraOptionsComponent,
    CardCarteiraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
