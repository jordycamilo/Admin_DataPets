import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClienteService, Cliente } from '../../services/cliente.service';

declare const bootstrap: any;

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[] = [];
  clienteSeleccionado: Cliente = this.nuevoCliente();
  fotoSeleccionada: File | null = null;
  modal: any;

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.cargarClientes();
    this.modal = new bootstrap.Modal(document.getElementById('clienteModal'));
  }

  nuevoCliente(): Cliente {
    return {
      nombre: '',
      correo: '',
      telefono: '',
      foto: '',
      created_at: undefined // ← Aquí estaba como fecha_registro, ahora corregido
    };
  }

  cargarClientes(): void {
    this.clienteService.obtenerClientes().subscribe({
      next: (data) => this.clientes = data,
      error: (err) => console.error('Error al cargar clientes', err)
    });
  }

  abrirModal(cliente?: Cliente): void {
    this.clienteSeleccionado = cliente ? { ...cliente } : this.nuevoCliente();
    this.fotoSeleccionada = null;
    this.modal.show();
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.fotoSeleccionada = file;
    }
  }

  guardarCliente(): void {
    const formData = new FormData();
    formData.append('nombre', this.clienteSeleccionado.nombre);
    formData.append('correo', this.clienteSeleccionado.correo);
    formData.append('telefono', this.clienteSeleccionado.telefono || '');

    if (this.fotoSeleccionada) {
      formData.append('foto', this.fotoSeleccionada);
    }

    const peticion = this.clienteSeleccionado.id
      ? this.clienteService.actualizarCliente(this.clienteSeleccionado.id, formData)
      : this.clienteService.crearCliente(formData);

    peticion.subscribe({
      next: () => {
        this.cargarClientes();
        this.modal.hide();
      },
      error: (err) => {
        console.error('Error al guardar cliente', err);
        if (err.status === 422 && err.error.errors) {
          console.error('Errores de validación:', err.error.errors);
        }
      }
    });
  }

  editarCliente(cliente: Cliente): void {
    this.abrirModal(cliente);
  }

  eliminarCliente(id?: number): void {
    if (!id) return;

    if (confirm('¿Estás seguro de que deseas eliminar este cliente?')) {
      this.clienteService.eliminarCliente(id).subscribe({
        next: () => {
          this.clientes = this.clientes.filter(c => c.id !== id);
          console.log('Cliente eliminado');
        },
        error: (err) => console.error('Error al eliminar cliente', err)
      });
    }
  }
}
