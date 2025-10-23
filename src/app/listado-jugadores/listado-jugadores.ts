import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { JugadorService, Jugador } from '../services/jugador.service';
import { Router } from '@angular/router';
import { ExcelExport } from '../services/excel-export';
import { FormControl } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-listado-jugadores',
  imports: [RouterModule, CommonModule, MatInputModule, MatAutocompleteModule, ReactiveFormsModule],
  templateUrl: './listado-jugadores.html',
  styleUrl: './listado-jugadores.css'
})
export class ListadoJugadores {
  jugadores: Jugador[] = [];

  paginaActual = 1;
  limite = 100;
  totalJugadores = 0;
  totalPaginas = 0;
  filtroActivo = false;
  clubFiltrado = '';

  clubControl = new FormControl('');
  clubesDisponibles: string[] = [];
  clubesFiltrados!: Observable<string[]>;

  constructor(private jugadorService: JugadorService, private router: Router, private excelExport: ExcelExport, private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/login']);
      return;
    }


    this.obtenerTotal();
    this.cargarJugadores();
    this.obtenerClubes();
    this.clubesFiltrados = this.clubControl.valueChanges.pipe(
      startWith(''),
      map(valor => this.filtrarClubes(valor || ''))
    );
  }

  cargarJugadores() {
    this.jugadorService.getJugadoresPaginados(this.paginaActual, this.limite).subscribe({
      next: (data) => {
        this.jugadores = data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error al cargar jugadores:', err);
      }
    });
  }

  obtenerTotal() {
    this.jugadorService.getTotalJugadores().subscribe({
      next: (total) => {
        this.totalJugadores = total;
        this.totalPaginas = Math.ceil(this.totalJugadores / this.limite);
      },
      error: (err) => {
        console.error('Error al obtener total de jugadores:', err);
      }
    });
  }

  siguientePagina() {
    if (this.paginaActual < this.totalPaginas) {
      this.paginaActual++;
      this.cargarJugadores();
    }
  }

  paginaAnterior() {
    if (this.paginaActual > 1) {
      this.paginaActual--;
      this.cargarJugadores();
    }
  }

  // Filtrar por club 
  filtrarClub(club: string) {
    this.paginaActual = 1;
    this.filtroActivo = true;
    this.clubFiltrado = club;
    this.jugadorService.filtrarPorClub(club).subscribe(data => {
      this.jugadores = data;
    });
  }
  
  quitarFiltro() {
    this.filtroActivo = false;
    this.clubFiltrado = '';
    this.clubControl.setValue('');
    this.jugadores = [];
    this.paginaActual = 1;
    this.cargarJugadores();
  }

  obtenerClubes() {
    this.jugadorService.getClubes().subscribe({
      next: (clubes) => {
        this.clubesDisponibles = clubes;
      },
      error: (err) => {
        console.error('Error al obtener clubes:', err);
      }
    });
  }

  filtrarClubes(valor: string): string[] {
    const filtro = valor.toLowerCase();
    return this.clubesDisponibles.filter(club => club.toLowerCase().includes(filtro));
  }

  verDetalle(id: number) {
    // Navegación al detalle
    this.router.navigate(['/detalle', id]);
  }

  exportarAExcel() {
    this.excelExport.exportAsExcelFile(this.jugadores, 'jugadores-filtrados');
  }

  exportarACSV() {
    this.excelExport.exportAsCSV(this.jugadores, 'jugadores-filtrados');
  }
}
