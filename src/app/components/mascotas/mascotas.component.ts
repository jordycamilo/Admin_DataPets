// src/app/components/mascotas/mascotas.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MascotaService, Mascota } from '../../services/mascota.service';
import { ClienteService } from '../../services/cliente.service';

declare var bootstrap: any;

@Component({
  selector: 'app-mascotas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mascotas.component.html',
})
export class MascotasComponent implements OnInit {
  mascotas: Mascota[] = [];
  mascotaSeleccionada: Mascota = this.nuevaMascota();
  clientes: any[] = [];
  modal: any;

  constructor(
    private mascotaService: MascotaService,
    private clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    this.cargarMascotas();
    this.clienteService.obtenerClientes().subscribe(data => this.clientes = data);

    const modalElement = document.getElementById('mascotaModal');
    if (modalElement) {
      this.modal = new bootstrap.Modal(modalElement);
    }
  }

  nuevaMascota(): Mascota {
    return {
      id: 0,
      nombre: '',
      especie: '',
      raza: '',
      edad: 0,
      sexo: '',
      color: '',
      cliente_id: 0
    };
  }

  abrirModal(mascota?: Mascota): void {
    this.mascotaSeleccionada = mascota ? { ...mascota } : this.nuevaMascota();
    this.modal?.show();
  }

  cerrarModal(): void {
    this.modal?.hide();
  }

  guardarMascota(): void {
    const request = this.mascotaSeleccionada.id
      ? this.mascotaService.actualizarMascota(this.mascotaSeleccionada.id, this.mascotaSeleccionada)
      : this.mascotaService.crearMascota(this.mascotaSeleccionada);

    request.subscribe(() => {
      this.cargarMascotas();
      this.cerrarModal();
    });
  }

  eliminarMascota(id?: number): void {
    if (id && confirm('¿Eliminar esta mascota?')) {
      this.mascotaService.eliminarMascota(id).subscribe(() => {
        this.mascotas = this.mascotas.filter(m => m.id !== id);
      });
    }
  }

  cargarMascotas(): void {
    this.mascotaService.obtenerMascotas().subscribe(data => this.mascotas = data);
  }
}
