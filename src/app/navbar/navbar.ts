import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';


@Component({
  selector: 'app-navbar',
  imports: [RouterModule, MatToolbarModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  constructor(private router: Router) {}

  cerrarSesion() {
    localStorage.removeItem('token'); //Elimina el token
    this.router.navigate(['/login']); //Redirige al login
  }
}
