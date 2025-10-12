import { Routes } from '@angular/router';
import { Login } from './login/login';
import { ListadoJugadores } from './listado-jugadores/listado-jugadores';
import { DetalleJugador } from './detalle-jugador/detalle-jugador';
import { FormularioJugador } from './formulario-jugador/formulario-jugador';
import { PaginaError } from './pagina-error/pagina-error';





export const routes: Routes = [
    { path: '', component: Login },
    { path: 'listado', component: ListadoJugadores },
    { path: 'detalle/:id', component: DetalleJugador },
    { path: 'nuevo', component: FormularioJugador },
    { path: 'editar/:id', component: FormularioJugador },
    { path: '**', component: PaginaError }
];

