import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario-jugador',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-jugador.html',
  styleUrl: './formulario-jugador.css'
})
export class FormularioJugador {

  jugadorForm: FormGroup;
  modoEdicion = false;

  constructor(private fb: FormBuilder) {
    this.jugadorForm = this.fb.group({
      nombre: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(0)]],
      equipo: ['', Validators.required],
      valor: ['', [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit() {
    if (this.jugadorForm.valid) {
      // Lógica para enviar el formulario
      const jugador = this.jugadorForm.value;
      console.log('Jugador enviado:', jugador);
      // Acá podrías llamar a tu servicio para guardar el jugador
    }
    else {
      this.jugadorForm.markAllAsTouched();
    }

  }

}
