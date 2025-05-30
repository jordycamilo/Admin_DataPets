import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Pqrsd {
  id?: number;
  tipo: string;
  descripcion: string;
  estado: string;
  cliente_id: number;
  cliente?: {
    id: number;
    nombre: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class PqrsdService {
  private apiUrl = 'http://localhost:8000/api/pqrsd';

  constructor(private http: HttpClient) {}

  obtenerPqrsd(): Observable<Pqrsd[]> {
    return this.http.get<Pqrsd[]>(this.apiUrl);
  }

  crearPqrsd(pqrsd: Pqrsd): Observable<Pqrsd> {
    return this.http.post<Pqrsd>(this.apiUrl, pqrsd);
  }

  actualizarPqrsd(id: number, pqrsd: Pqrsd): Observable<Pqrsd> {
    return this.http.put<Pqrsd>(`${this.apiUrl}/${id}`, pqrsd);
  }

  eliminarPqrsd(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
