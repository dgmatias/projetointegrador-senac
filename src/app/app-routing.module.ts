import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventosComponent } from './eventos/eventos.component';
import { EventoInfoComponent } from './evento-info/evento-info.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CarteiraComponent } from './carteira/carteira.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'eventos', component: EventosComponent},
  {path: 'evento-info', component: EventoInfoComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'carteira', component: CarteiraComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
