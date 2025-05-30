import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Servicio {
  id: number;
  nombre: string;
  descripcion: string;
  editando: boolean;
}

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
})
export class ServiciosComponent implements OnInit {
  servicios: Servicio[] = [];

  ngOnInit() {
    const datosGuardados = localStorage.getItem('servicios');
    if (datosGuardados) {
      this.servicios = JSON.parse(datosGuardados);
    } else {
      this.servicios = [
        { id: 1, nombre: 'Vacunación', descripcion: 'Aplicación de vacunas para mascotas.', editando: false },
        { id: 2, nombre: 'Plan de alimentación', descripcion: 'Asesoría nutricional personalizada.', editando: false },
        { id: 3, nombre: 'Baño', descripcion: 'Servicio de higiene y baño para mascotas.', editando: false },
        { id: 4, nombre: 'Peluquería', descripcion: 'Corte y arreglo estético para mascotas.', editando: false },
      ];
    }
  }

  editar(servicio: Servicio) {
    servicio.editando = true;
  }

  guardar(servicio: Servicio) {
    servicio.editando = false;
    this.guardarEnLocalStorage();
  }

  cancelar(servicio: Servicio) {
    servicio.editando = false;
  }

  guardarEnLocalStorage() {
    localStorage.setItem('servicios', JSON.stringify(this.servicios));
  }
}
