import { Component } from '@angular/core';

@Component({
  selector: 'has-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*title = 'Hello Wolrd';
  nome = 'Francielle Tavares'
  foto = 'favicon.ico';*/

  peso = 70;
  altura = 1.7;
  resultado = this.peso/(this.altura * this.altura);

  exibir(): void{

    alert("IMC" + " " + this.resultado.toFixed(3))
  }
}
