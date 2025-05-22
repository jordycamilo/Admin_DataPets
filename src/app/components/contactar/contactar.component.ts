import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule

@Component({
  selector: 'app-contactar',
  standalone: true,
  imports: [CommonModule], // Asegúrate de importar CommonModule aquí
  templateUrl: './contactar.component.html',
  styleUrls: ['./contactar.component.css']
})
export class ContactarComponent {
  contactos = [
    { id: 1, name: 'Juan Pérez', email: 'juan.perez@example.com', phone: '+1 555 1234', message: 'Quisiera más información sobre los servicios.', date: '2023-04-01' },
    { id: 2, name: 'María Gómez', email: 'maria.gomez@example.com', phone: '+1 555 5678', message: 'Estoy interesado en un presupuesto.', date: '2023-04-02' },
    { id: 3, name: 'Carlos Díaz', email: 'carlos.diaz@example.com', phone: '+1 555 8765', message: 'Tengo una duda sobre la disponibilidad de productos.', date: '2023-04-03' },
    // Agrega más contactos si es necesario
  ];

  // Lógica para responder el mensaje
  responderContacto(id: number) {
    alert(`Respondiendo al mensaje de contacto con ID: ${id}`);
  }

  // Lógica para eliminar el contacto
  eliminarContacto(id: number) {
    this.contactos = this.contactos.filter(contacto => contacto.id !== id);
    alert(`Mensaje con ID: ${id} eliminado`);
  }
}
