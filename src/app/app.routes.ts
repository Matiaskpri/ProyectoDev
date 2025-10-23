import { Routes } from '@angular/router';
import { Login } from './login/login';
import { ListadoJugadores } from './listado-jugadores/listado-jugadores';
import { DetalleJugador } from './detalle-jugador/detalle-jugador';
import { FormularioJugador } from './formulario-jugador/formulario-jugador';
import { PaginaError } from './pagina-error/pagina-error';
import { AuthGuard } from './auth-guard';
import { Inicio } from './inicio/inicio';


export const routes: Routes = [
  { path: '', component: Inicio }, // Redirección inicial
  { path: 'login', component: Login },
  { path: 'listado', component: ListadoJugadores, canActivate: [AuthGuard] },
  { path: 'detalle/:id', component: DetalleJugador, canActivate: [AuthGuard] },
  { path: 'nuevo', component: FormularioJugador, canActivate: [AuthGuard] },
  { path: 'editar/:id', component: FormularioJugador, canActivate: [AuthGuard] },
  { path: '**', component: PaginaError }
];

