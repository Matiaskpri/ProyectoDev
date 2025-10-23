import { Component, } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-inicio',
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {

}
