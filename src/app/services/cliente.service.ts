import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Cliente {
  id?: number;
  nombre: string;
  correo: string;
  telefono: string;
  foto: string;
  created_at?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'http://localhost:8000/api/clientes';

  constructor(private http: HttpClient) {}

  obtenerClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl);
  }

  crearCliente(cliente: FormData): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiUrl, cliente);
  }

  actualizarCliente(id: number, cliente: FormData): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.apiUrl}/${id}?_method=PUT`, cliente);
  }

  eliminarCliente(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
