import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  plano = {
    tipo: 'Simples',
    preco: 'R$ 123,32',
  }
}
