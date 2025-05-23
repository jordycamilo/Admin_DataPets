import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuAbierto = false; // Variable para controlar si el menú está abierto o cerrado

  // Método para alternar el estado del menú (abrir/cerrar)
  toggleDropdown(): void {
    this.menuAbierto = !this.menuAbierto;
  }

  // Método para cerrar el menú
  cerrarMenu(): void {
    this.menuAbierto = true;
  }
}
