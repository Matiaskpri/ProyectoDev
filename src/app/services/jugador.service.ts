import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Jugador {
  id?: number;
  nombre: string;
  posicion: string;
  equipo: string;
  valor: number;
}

@Injectable({ providedIn: 'root' })
export class JugadorService {
  private apiUrl = 'http://localhost:3000/api/jugadores';

  constructor(private http: HttpClient) {}

  getJugadores(): Observable<Jugador[]> {
    return this.http.get<Jugador[]>(this.apiUrl);
  }

  getJugador(id: number): Observable<Jugador> {
    return this.http.get<Jugador>(`${this.apiUrl}/${id}`);
  }

  crearJugador(jugador: Jugador): Observable<Jugador> {
    return this.http.post<Jugador>(this.apiUrl, jugador);
  }

  actualizarJugador(id: number, jugador: Jugador): Observable<Jugador> {
    return this.http.put<Jugador>(`${this.apiUrl}/${id}`, jugador);
  }

  eliminarJugador(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}