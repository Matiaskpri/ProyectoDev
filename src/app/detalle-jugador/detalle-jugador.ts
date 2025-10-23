import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { JugadorService, Jugador } from '../services/jugador.service';
import { Router } from '@angular/router';







@Component({
  selector: 'app-detalle-jugador',
  imports: [CommonModule, RouterModule],
  templateUrl: './detalle-jugador.html',
  styleUrl: './detalle-jugador.css'
})
export class DetalleJugador {
   jugador?: Jugador;

  constructor(private route: ActivatedRoute, private jugadorService: JugadorService, private router: Router) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.jugadorService.getJugador(+id).subscribe({
        next: (data) => this.jugador = data,
        error: (err) => console.error('Error al cargar jugador:', err)
      });
    }
  }

  eliminarJugador() {
    if (this.jugador?.id && window.confirm('¿Estás seguro de que querés eliminar este jugador?'))
 {
      this.jugadorService.eliminarJugador(this.jugador.id).subscribe({
        next: () => {
          console.log('Jugador eliminado');
          this.router.navigate(['/listado']);
        },
        error: (err) => {
          console.error('Error al eliminar jugador:', err);
        }
      });
    }
  }
}
