import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { JugadorService, Jugador } from '../services/jugador.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-listado-jugadores',
  imports: [RouterModule, CommonModule],
  templateUrl: './listado-jugadores.html',
  styleUrl: './listado-jugadores.css'
})
export class ListadoJugadores {
  jugadores: Jugador[] = [];

  constructor(private jugadorService: JugadorService, private router: Router
) {}

  ngOnInit() {
    this.jugadorService.getJugadores().subscribe({
      next: (data) => {
        this.jugadores = data;
      },
      error: (err) => {
        console.error('Error al cargar jugadores:', err);
      }
    });
  }

  verDetalle(id: number) {
    // Navegación al detalle
    this.router.navigate(['/detalle', id]);
  }



}
