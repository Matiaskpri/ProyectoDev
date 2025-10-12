import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-listado-jugadores',
  imports: [RouterModule, CommonModule],
  templateUrl: './listado-jugadores.html',
  styleUrl: './listado-jugadores.css'
})
export class ListadoJugadores {
  jugadores = [
    { id: 1, nombre: 'Messi', posicion: 'Delantero' },
    { id: 2, nombre: 'Modric', posicion: 'Mediocampista' },
    { id: 3, nombre: 'Neuer', posicion: 'Arquero' },
  ];
  
}
