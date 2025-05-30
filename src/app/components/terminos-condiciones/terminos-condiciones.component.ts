import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-terminos-condiciones',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './terminos-condiciones.component.html',
  styleUrls: ['./terminos-condiciones.component.css']
})
export class TerminosCondicionesComponent implements OnInit {
  texto: string = '';
  editando = false;
  private backupTexto = '';

  ngOnInit() {
    const guardado = localStorage.getItem('terminos');
    this.texto = guardado
      ? guardado
      : `Aquí van tus Términos y Condiciones por defecto...
    
1. **Uso del servicio**  
El usuario se compromete a...
    
2. **Propiedad intelectual**  
Todo el contenido...
    
3. **Limitación de responsabilidad**  
La empresa no será responsable...
    
(Puedes editar este texto.)`;
  }

  editar() {
    this.backupTexto = this.texto;
    this.editando = true;
  }

  guardar() {
    this.editando = false;
    localStorage.setItem('terminos', this.texto);
  }

  cancelar() {
    this.texto = this.backupTexto;
    this.editando = false;
  }
}
