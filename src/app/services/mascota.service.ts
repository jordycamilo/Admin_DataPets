// src/app/services/mascota.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Mascota {
  id?: number;
  nombre: string;
  especie: string;
  raza: string;
  edad: number;
  color: string;
  sexo: string;
  cliente_id: number;
  cliente?: { id: number, nombre: string };
}

@Injectable({ providedIn: 'root' })
export class MascotaService {
  private apiUrl = 'http://localhost:8000/api/mascotas';

  constructor(private http: HttpClient) {}

  obtenerMascotas(): Observable<Mascota[]> {
    return this.http.get<Mascota[]>(this.apiUrl);
  }

  crearMascota(mascota: Mascota): Observable<Mascota> {
    return this.http.post<Mascota>(this.apiUrl, mascota);
  }

  actualizarMascota(id: number, mascota: Mascota): Observable<Mascota> {
    return this.http.put<Mascota>(`${this.apiUrl}/${id}`, mascota);
  }

  eliminarMascota(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
