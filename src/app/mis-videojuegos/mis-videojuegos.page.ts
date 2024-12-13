import { Component, OnInit } from '@angular/core';
import { VideojuegoService } from '../services/videojuego.service';

@Component({
  selector: 'app-mis-videojuegos',
  templateUrl: './mis-videojuegos.page.html',
  styleUrls: ['./mis-videojuegos.page.scss'],
})
export class MisVideojuegosPage implements OnInit {
  videojuegos: any[] = [];

  constructor(private videojuegoService: VideojuegoService) {}

  ngOnInit() {
    this.getAllVideojuegos();
  }

  getAllVideojuegos() {
    this.videojuegoService.getVideojuegos().subscribe(
      (response) => {
        this.videojuegos = response;
      },
      (error) => {
        console.error('Error al obtener los videojuegos:', error);
      }
    );
  }
}
