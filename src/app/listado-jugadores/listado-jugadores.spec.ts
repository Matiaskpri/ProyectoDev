import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoJugadores } from './listado-jugadores';

describe('ListadoJugadores', () => {
  let component: ListadoJugadores;
  let fixture: ComponentFixture<ListadoJugadores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoJugadores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoJugadores);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
