import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-detalle-jugador',
  imports: [CommonModule, RouterModule],
  templateUrl: './detalle-jugador.html',
  styleUrl: './detalle-jugador.css'
})
export class DetalleJugador {
  jugador = {
    nombre: 'string',
    posicion: 'string',
    equipo: 'string',
    valor: 0,
  };
}
