import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../../services/cliente.service';
import { PqrsdService, Pqrsd } from '../../services/pqrsd.service';

@Component({
  selector: 'app-pqrsd',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pqrsd.component.html'
})
export class PqrsdComponent implements OnInit {
  pqrsds: Pqrsd[] = [];
  clientes: any[] = [];

  pqrsdSeleccionado: Pqrsd = {
    tipo: '',
    descripcion: '',
    estado: '',
    cliente_id: 0
  };

  constructor(
    private pqrsdService: PqrsdService,
    private clienteService: ClienteService
  ) {}

  ngOnInit() {
    this.obtenerPqrsd();
    this.obtenerClientes();
  }

  obtenerPqrsd() {
    this.pqrsdService.obtenerPqrsd().subscribe(data => {
      this.pqrsds = data;
    });
  }

  obtenerClientes() {
    this.clienteService.obtenerClientes().subscribe(data => {
      this.clientes = data;
    });
  }

  abrirModal(pqrsd?: Pqrsd) {
    this.pqrsdSeleccionado = pqrsd ? { ...pqrsd } : {
      tipo: '',
      descripcion: '',
      estado: '',
      cliente_id: 0
    };
    const modal = new (window as any).bootstrap.Modal('#pqrsdModal');
    modal.show();
  }

  guardarPqrsd() {
    if (this.pqrsdSeleccionado.id) {
      this.pqrsdService.actualizarPqrsd(this.pqrsdSeleccionado.id, this.pqrsdSeleccionado)
        .subscribe(() => this.obtenerPqrsd());
    } else {
      this.pqrsdService.crearPqrsd(this.pqrsdSeleccionado)
        .subscribe(() => this.obtenerPqrsd());
    }
    (window as any).bootstrap.Modal.getInstance(document.getElementById('pqrsdModal')).hide();
  }

  eliminarPqrsd(id: number) {
    if (confirm('¿Está seguro de eliminar este registro?')) {
      this.pqrsdService.eliminarPqrsd(id).subscribe(() => this.obtenerPqrsd());
    }
  }
}
