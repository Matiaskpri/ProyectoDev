import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-pagina-error',
  imports: [CommonModule, RouterModule],
  templateUrl: './pagina-error.html',
  styleUrl: './pagina-error.css'
})
export class PaginaError {
  logueado = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.logueado = !!localStorage.getItem('token');
  }

  volverAlLogin() {
    this.router.navigate(['/login']);
  }

  irAlListado() {
    this.router.navigate(['/listado']);
  }
}
