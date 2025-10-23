import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JugadorService, Jugador } from '../services/jugador.service';
import { ActivatedRoute,RouterModule, Router } from '@angular/router';




@Component({
  selector: 'app-formulario-jugador',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './formulario-jugador.html',
  styleUrl: './formulario-jugador.css'
})
export class FormularioJugador {
  jugadorForm: FormGroup;
  modoEdicion: boolean = false;
  idJugador?: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private jugadorService: JugadorService
  ) {
    this.jugadorForm = this.fb.group({
      nombre: ['', Validators.required],
      posicion: ['', Validators.required],
      equipo: ['', Validators.required],
      valor: [0, [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.modoEdicion = true;
      this.idJugador = +id;
      this.jugadorService.getJugador(this.idJugador).subscribe({
        next: (jugador) => {
          this.jugadorForm.patchValue(jugador);
        },
        error: (err) => {
          console.error('Error al cargar jugador:', err);
        }
      });
    }
  }

  onSubmit() {
    const jugador: Jugador = this.jugadorForm.value;

    if (this.modoEdicion && this.idJugador !== undefined) {
      // Modo edición: actualizar jugador
      this.jugadorService.actualizarJugador(this.idJugador, jugador).subscribe({
        next: () => {
          console.log('Jugador actualizado');
          this.router.navigate(['/listado']);
        },
        error: (err) => {
          console.error('Error al actualizar jugador:', err);
        }
      });
    } else {
      // Modo creación: crear nuevo jugador (sin id)
      this.jugadorService.crearJugador(jugador).subscribe({
        next: () => {
          console.log('Jugador creado');
          this.router.navigate(['/listado']);
        },
        error: (err) => {
          console.error('Error al crear jugador:', err);
        }
      });
    }
  }
}

