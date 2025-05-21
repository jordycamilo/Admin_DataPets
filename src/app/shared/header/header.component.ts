import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
standalone: true,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuAbierto = false;

toggleDropdown(): void {
  this.menuAbierto = !this.menuAbierto;
}
}
