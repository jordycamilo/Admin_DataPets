import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // 👈 IMPORTANTE

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule], // 👈 AÑADIR ESTO
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuAbierto = false;

  toggleDropdown() {
    this.menuAbierto = !this.menuAbierto;
  }
}
