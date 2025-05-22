import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  imports: [CommonModule, CardComponent],
})
export class InicioComponent {
  cards = [
    { titulo: 'Usuarios', valor: '250' },
    { titulo: 'Ventas', valor: '$12,000' },
    { titulo: 'Productos', valor: '87' },
    { titulo: 'Visitas', valor: '8,500' }
  ];
}
