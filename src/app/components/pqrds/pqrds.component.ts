import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pqrds',
  standalone: true,
  imports: [CommonModule, FormsModule], // Importar FormsModule para usar ngModel
  templateUrl: './pqrds.component.html',
  styleUrls: ['./pqrds.component.css']
})
export class PqrdsComponent {
  // Lista de solicitudes PQR
  pqrList = [
    { id: 1, name: 'Juan Pérez', email: 'juan.perez@example.com', phone: '+1 555 1234', request: 'Reclamo por servicio no entregado', response: '' },
    { id: 2, name: 'María Gómez', email: 'maria.gomez@example.com', phone: '+1 555 5678', request: 'Queja por retraso en la entrega', response: '' },
    { id: 3, name: 'Carlos Díaz', email: 'carlos.diaz@example.com', phone: '+1 555 8765', request: 'Petición de extensión de plazo', response: '' }
  ];

  // Variable para almacenar la respuesta
  responseText: string = '';

  // Función para enviar respuesta
  enviarRespuesta(id: number) {
    const contacto = this.pqrList.find(pqr => pqr.id === id);
    if (contacto) {
      // Simulación de envío de respuesta por correo y teléfono
      alert(`Respuesta enviada a: \nEmail: ${contacto.email} \nTeléfono: ${contacto.phone}`);
      contacto.response = this.responseText; // Guardar la respuesta en el objeto
      this.responseText = ''; // Limpiar el campo de respuesta
    }
  }
}
