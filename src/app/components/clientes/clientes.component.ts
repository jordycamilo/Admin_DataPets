import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule], // Asegúrate de importar CommonModule aquí
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  clientes = [
    { id: 1, name: 'Cy Ganderton', job: 'Quality Control Specialist', company: 'Littel', location: 'Canada', lastLogin: '12/16/2020', color: 'Blue' },
    { id: 2, name: 'Hart Hagerty', job: 'Desktop Support Technician', company: 'Zemlak', location: 'United States', lastLogin: '12/5/2020', color: 'Purple' },
    { id: 3, name: 'Brice Swyre', job: 'Tax Accountant', company: 'Carroll Group', location: 'China', lastLogin: '8/15/2020', color: 'Red' },
    { id: 4, name: 'Marjy Ferencz', job: 'Office Assistant I', company: 'Rowe-Schoen', location: 'Russia', lastLogin: '3/25/2021', color: 'Crimson' },
    { id: 5, name: 'Yancy Tear', job: 'Community Outreach Specialist', company: 'Wyman-Ledner', location: 'Brazil', lastLogin: '5/22/2020', color: 'Indigo' },
    { id: 6, name: 'Irma Vasilik', job: 'Editor', company: 'Wiza, Bins and Emard', location: 'Venezuela', lastLogin: '12/8/2020', color: 'Purple' },
    { id: 7, name: 'Meghann Durtnal', job: 'Staff Accountant IV', company: 'Schuster-Schimmel', location: 'Philippines', lastLogin: '2/17/2021', color: 'Yellow' },
    { id: 8, name: 'Sammy Seston', job: 'Accountant I', company: "O'Hara, Welch and Keebler", location: 'Indonesia', lastLogin: '5/23/2020', color: 'Crimson' },
    { id: 9, name: 'Lesya Tinham', job: 'Safety Technician IV', company: 'Turner-Kuhlman', location: 'Philippines', lastLogin: '2/21/2021', color: 'Maroon' },
    { id: 10, name: 'Zaneta Tewkesbury', job: 'VP Marketing', company: 'Sauer LLC', location: 'Chad', lastLogin: '6/23/2020', color: 'Green' },
    // Agrega más clientes si es necesario
  ];

  // Definimos las funciones 'editarCliente' y 'eliminarCliente'

  editarCliente(id: number) {
    // Lógica para editar el cliente
    alert(`Editar cliente con ID: ${id}`);
  }

  eliminarCliente(id: number) {
    // Lógica para eliminar el cliente
    this.clientes = this.clientes.filter(cliente => cliente.id !== id);
    alert(`Cliente con ID: ${id} eliminado`);
  }
}
