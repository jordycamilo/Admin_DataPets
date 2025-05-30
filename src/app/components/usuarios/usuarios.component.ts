import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosService, Usuario } from '../../services/usuarios.service';
import { FormsModule } from '@angular/forms';

declare const bootstrap: any; // Para acceder a Bootstrap 5 modal JS

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];
  usuarioSeleccionado: Usuario = { nombre: '', correo: '' };
  modal: any;

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.cargarUsuarios();
    this.modal = new bootstrap.Modal(document.getElementById('usuarioModal'));
  }

  cargarUsuarios(): void {
    this.usuariosService.obtenerUsuarios().subscribe({
      next: (data) => this.usuarios = data,
      error: (err) => console.error('Error al cargar usuarios', err)
    });
  }

  abrirModal(usuario?: Usuario): void {
    this.usuarioSeleccionado = usuario ? { ...usuario } : { nombre: '', correo: '' };
    this.modal.show();
  }

  guardarUsuario(): void {
    const peticion = this.usuarioSeleccionado.id
      ? this.usuariosService.actualizarUsuario(this.usuarioSeleccionado.id, this.usuarioSeleccionado)
      : this.usuariosService.crearUsuario(this.usuarioSeleccionado);

    peticion.subscribe({
      next: () => {
        this.cargarUsuarios();
        this.modal.hide();
      },
      error: (err) => console.error('Error al guardar', err)
    });
  }

  editarUsuario(usuario: Usuario): void {
    this.abrirModal(usuario);
  }

  eliminarUsuario(id?: number): void {
    if (!id) return;

    if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      this.usuariosService.eliminarUsuario(id).subscribe({
        next: () => {
          this.usuarios = this.usuarios.filter(u => u.id !== id);
          console.log('Usuario eliminado');
        },
        error: (err) => console.error('Error al eliminar', err)
      });
    }
  }
}
