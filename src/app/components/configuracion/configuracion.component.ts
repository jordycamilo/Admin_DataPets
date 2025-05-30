import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { ThemeService }  from '../../services/theme.service';

interface Settings {
  idioma: 'es' | 'en';
  tema: 'light' | 'dark';
  notificaciones: boolean;
}

@Component({
  selector: 'app-configuracion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {
  // 🛑 Aquí definimos la propiedad settings:
  settings: Settings = {
    idioma: 'es',
    tema:  'light',
    notificaciones: true
  };
  // Guardamos un backup para cancelar
  private backup!: Settings;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    // Carga de localStorage si existe
    const guardado = localStorage.getItem('appSettings');
    if (guardado) {
      this.settings = JSON.parse(guardado);
    }
    // Backup para "Cancelar"
    this.backup = { ...this.settings };
    // Aplica el tema inicial
    this.themeService.setTheme(this.settings.tema);
  }

  // Cambia el idioma usando ngx-translate o tu propio método:
  cambiarIdioma() {
    // Ejemplo si usas ngx-translate:
    // this.translate.use(this.settings.idioma);
  }

  // Alterna el tema claro/oscuro
  toggleTema() {
    this.settings.tema = this.settings.tema === 'light' ? 'dark' : 'light';
    this.themeService.setTheme(this.settings.tema);
  }

  guardar() {
    // Aplica idioma y tema
    this.cambiarIdioma();
    this.themeService.setTheme(this.settings.tema);

    // Persiste en localStorage
    localStorage.setItem('appSettings', JSON.stringify(this.settings));
    // Actualiza el backup
    this.backup = { ...this.settings };
  }

  cancelar() {
    // Restaura desde el backup
    this.settings = { ...this.backup };
    this.themeService.setTheme(this.settings.tema);
  }

  resetear() {
    // Valores por defecto
    this.settings = { idioma: 'es', tema: 'light', notificaciones: true };
    this.backup   = { ...this.settings };
    this.themeService.setTheme(this.settings.tema);
  }
}
