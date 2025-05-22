import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // 👈 Importar CommonModule

interface Cita {
  id: number;
  nombre: string;
  pais: string;
  trabajo: string;
  colorFavorito: string;
  avatar: string;
}

@Component({
  selector: 'app-citas',
  standalone: true,
  imports: [FormsModule, CommonModule], // 👈 Agregar aquí también
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css'],
})
export class CitasComponent {
  citas: Cita[] = [
    {
      id: 1,
      nombre: 'Hart Hagerty',
      pais: 'Estados Unidos',
      trabajo: 'Ingeniero de Software',
      colorFavorito: 'Azul',
      avatar: 'https://img.daisyui.com/images/profile/demo/2@94.webp',
    },
  ];

  nuevaCita: Cita = {
    id: 0,
    nombre: '',
    pais: '',
    trabajo: '',
    colorFavorito: '',
    avatar: '',
  };

  editandoId: number | null = null;

  agregarCita() {
    if (!this.nuevaCita.nombre.trim()) return;

    const nueva = { ...this.nuevaCita, id: Date.now() };
    this.citas.push(nueva);
    this.resetForm();
  }

  editarCita(cita: Cita) {
    this.editandoId = cita.id;
    this.nuevaCita = { ...cita };
  }

  guardarEdicion() {
    this.citas = this.citas.map((c) =>
      c.id === this.editandoId ? { ...this.nuevaCita } : c
    );
    this.resetForm();
  }

  eliminarCita(id: number) {
    this.citas = this.citas.filter((c) => c.id !== id);
  }

  resetForm() {
    this.nuevaCita = {
      id: 0,
      nombre: '',
      pais: '',
      trabajo: '',
      colorFavorito: '',
      avatar: '',
    };
    this.editandoId = null;
  }
}
