import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JugadorService, Jugador } from '../services/jugador.service';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-formulario-jugador',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-jugador.html',
  styleUrl: './formulario-jugador.css'
})
export class FormularioJugador {

  jugadorForm: FormGroup;
  modoEdicion = false;
  idJugador?: number;


  constructor(private fb: FormBuilder, private jugadorService: JugadorService, private route: ActivatedRoute, private router: Router) {
    this.jugadorForm = this.fb.group({
      nombre: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(0)]],
      posicion: ['', Validators.required],
      equipo: ['', Validators.required],
      valor: ['', [Validators.required, Validators.min(0)]]
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.modoEdicion = true;
      this.jugadorService.getJugador(+id).subscribe(jugador => {
      this.jugadorForm.patchValue(jugador);
      });
    }

  }

  onSubmit() {
    if (this.jugadorForm.valid) {
      const jugador: Jugador = this.jugadorForm.value;

      if (this.modoEdicion && this.idJugador !== undefined) {
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
    } else {
      this.jugadorForm.markAllAsTouched();
    }
  }

}
