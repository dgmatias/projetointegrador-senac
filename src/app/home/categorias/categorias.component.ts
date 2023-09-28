import { Component } from '@angular/core';
import { Categoria } from 'src/app/model/categoria-model';

@Component({
  selector: 'pro-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {
    categorias: Categoria[] = [{id: 1, categoria: "shows de rap", descricao: "descrição shows de rap", img: "assets/categoria.jpg"}]
}
