import { Component } from '@angular/core';

@Component({
  selector: 'pro-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.css']
})
export class CarrosselComponent {

  constructor() {}

  alterarImagem() {
    setInterval(()=>{
      console.log("A imagem foi alterada");
    }, 5000)
  }

  ngOnInit() {

    this.alterarImagem();

  }

}
