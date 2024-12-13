import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Videojuego {
  id: number;
  nombre: string;
  fechaLanzamiento: string; // Puede ser Date si se maneja así en el backend
  genero: string;
  plataforma: string;
  resena: string;
  precio: number;
  ventas: number;
}
@Injectable({
  providedIn: 'root',
})
export class VideojuegoService {
  private apiUrl = 'http://localhost:8080/videojuegos';

  constructor(private http: HttpClient) {}

  // Obtener todos los videojuegos (GET)
  getVideojuegos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Obtener un videojuego por su id (GET)
  getVideojuegoById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo videojuego (POST)
  createVideojuego(videojuego: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, videojuego);
  }

  // Actualizar un videojuego existente (PUT)
  updateVideojuego(id: number, videojuego: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, videojuego);
  }

  // Eliminar un videojuego (DELETE)
  deleteVideojuego(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
