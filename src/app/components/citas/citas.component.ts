import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CitaService, Cita } from '../../services/cita.service';
import { ClienteService, Cliente } from '../../services/cliente.service';

declare const bootstrap: any;

@Component({
  selector: 'app-citas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './citas.component.html',
})
export class CitasComponent implements OnInit {
  citas: (Cita & { cliente_nombre?: string })[] = [];
  clientes: Cliente[] = [];
  citaSeleccionada: Cita = this.nuevaCita();
  modal: any;

  constructor(
    private citaService: CitaService,
    private clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    this.cargarClientes();
  }

  nuevaCita(): Cita {
    return {
      fecha: '',
      hora: '',
      cliente_id: 0,
      nombre_mascota: '',
      motivo: '',
      estado: '',
    };
  }

  cargarClientes(): void {
    this.clienteService.obtenerClientes().subscribe({
      next: (clientes) => {
        this.clientes = clientes;
        this.cargarCitas(); // Esperamos hasta tener los clientes para luego asignar nombre a cada cita
      },
      error: (err) => console.error('Error al cargar clientes', err),
    });
  }

  cargarCitas(): void {
    this.citaService.obtenerCitas().subscribe({
      next: (data) => {
        this.citas = data.map(cita => {
          const cliente = this.clientes.find(c => c.id === cita.cliente_id);
          return { ...cita, cliente_nombre: cliente?.nombre || 'Desconocido' };
        });
      },
      error: (err) => console.error('Error al cargar citas', err),
    });
  }

  abrirModal(cita?: Cita): void {
    this.citaSeleccionada = cita ? { ...cita } : this.nuevaCita();
    this.modal = new bootstrap.Modal(document.getElementById('citaModal'));
    this.modal.show();
  }

  guardarCita(): void {
    const peticion = this.citaSeleccionada.id
      ? this.citaService.actualizarCita(this.citaSeleccionada.id, this.citaSeleccionada)
      : this.citaService.crearCita(this.citaSeleccionada);

    peticion.subscribe({
      next: () => {
        this.cargarCitas();
        this.modal.hide();
      },
      error: (err) => console.error('Error al guardar cita', err)
    });
  }

  eliminarCita(id?: number): void {
    if (!id) return;

    if (confirm('¿Deseas eliminar esta cita?')) {
      this.citaService.eliminarCita(id).subscribe({
        next: () => this.citas = this.citas.filter(c => c.id !== id),
        error: err => console.error('Error al eliminar cita', err)
      });
    }
  }
}
