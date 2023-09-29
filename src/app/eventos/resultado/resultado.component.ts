import { Component, Input } from '@angular/core';
import { Evento } from 'src/app/model/evento-model';
import { EventoService } from 'src/app/service/evento-service';

@Component({
  selector: 'pro-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {

  eventos: Evento[] = [];

  constructor(private service: EventoService) {

    this.service.listarEventos().subscribe(dados => this.eventos = dados);

  }

}
