import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioJugador } from './formulario-jugador';

describe('FormularioJugador', () => {
  let component: FormularioJugador;
  let fixture: ComponentFixture<FormularioJugador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioJugador]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioJugador);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
