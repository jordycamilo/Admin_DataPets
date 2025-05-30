import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Miembro {
  id: number;
  nombre: string;
  rol: string;
  descripcion: string;
  imagen: string;
  alt: string;
  editando: boolean;
}

@Component({
  selector: 'app-quienes-somos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css']
})
export class QuienesSomosComponent implements OnInit {
  miembros: Miembro[] = [];

  ngOnInit() {
    const guardado = localStorage.getItem('equipoDataPets');
    if (guardado) {
      this.miembros = JSON.parse(guardado);
    } else {
      this.miembros = [
        {
          id: 1,
          nombre: 'Hans Lemmel',
          rol: 'Desarrollador FrontEnd',
          descripcion: 'Encargado del diseño visual de la interfaz del usuario, maquetación responsiva y experiencia interactiva usando Angular, PrimeNG y Bootstrap.',
          imagen: 'https://img.freepik.com/vector-gratis/ilustracion-cara-alegre-nino-dibujos-animados_1308-163740.jpg',
          alt: 'Hans',
          editando: false
        },
        {
          id: 2,
          nombre: 'Estevan Franco',
          rol: 'Desarrollador FullStack',
          descripcion: 'Responsable del desarrollo integral del sistema, tanto en frontend como backend, asegurando la integración correcta entre base de datos y servicios web.',
          imagen: 'https://img.freepik.com/vector-premium/nino-dibujos-animados-sonriente-gafas_1639-57062.jpg',
          alt: 'Estevan',
          editando: false
        },
        {
          id: 3,
          nombre: 'Jose Soto',
          rol: 'Documentador',
          descripcion: 'Encargado de redactar manuales de usuario, diagramas, bitácoras de trabajo y toda la documentación técnica del proyecto.',
          imagen: 'https://img.freepik.com/vector-gratis/chico-alegre-gran-sonrisa_1308-164046.jpg',
          alt: 'Jose',
          editando: false
        },
        {
          id: 4,
          nombre: 'Jordy Diaz',
          rol: 'Database Manager',
          descripcion: 'Responsable de diseñar, mantener y optimizar la base de datos, garantizando integridad, consistencia y eficiencia en las consultas SQL.',
          imagen: 'https://img.freepik.com/vector-premium/perfil-avatar-nino-pequeno_18591-50925.jpg',
          alt: 'Jordy',
          editando: false
        }
      ];
    }
  }

  editar(miembro: Miembro) {
    miembro.editando = true;
  }

  guardar(miembro: Miembro) {
    miembro.editando = false;
    this.persistir();
  }

  cancelar(miembro: Miembro) {
    // recarga datos desde storage para ese miembro
    const original = JSON.parse(localStorage.getItem('equipoDataPets') || '[]')
                       .find((m: Miembro) => m.id === miembro.id);
    if (original) {
      Object.assign(miembro, original);
    }
    miembro.editando = false;
  }

  private persistir() {
    localStorage.setItem('equipoDataPets', JSON.stringify(this.miembros));
  }
}
