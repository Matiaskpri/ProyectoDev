import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


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

  //getJugadores(): Observable<Jugador[]> {
  //  return this.http.get<Jugador[]>(this.apiUrl);
  //}

  getJugadoresPaginados(pagina: number, limite: number): Observable<Jugador[]> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token') || '');
    const params = new HttpParams()
      .set('pagina', pagina)
      .set('limite', limite);
    return this.http.get<Jugador[]>(this.apiUrl, { headers, params });
  }

  getTotalJugadores(): Observable<number> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token') || '');
    return this.http.get<number>(`${this.apiUrl}/total`, { headers });
 }

  getJugador(id: number): Observable<Jugador> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token') || '');
    return this.http.get<Jugador>(`${this.apiUrl}/${id}`, { headers });
  }

  crearJugador(jugador: Jugador): Observable<Jugador> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token') || '');
    return this.http.post<Jugador>(this.apiUrl, jugador);
  }

  actualizarJugador(id: number, jugador: Jugador): Observable<Jugador> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token') || '');
    return this.http.put<Jugador>(`${this.apiUrl}/${id}`, jugador, { headers });
  }

  eliminarJugador(id: number): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token') || '');
    return this.http.delete<any>(`${this.apiUrl}/${id}`, { headers });
  }

  filtrarPorClub(club: string): Observable<Jugador[]> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token') || '');
    return this.http.get<Jugador[]>(`${this.apiUrl}?club=${club}`, { headers });
  }

  getClubes(): Observable<string[]> {
  const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token') || '');
  return this.http.get<string[]>('http://localhost:3000/api/clubes', { headers });
 }
}