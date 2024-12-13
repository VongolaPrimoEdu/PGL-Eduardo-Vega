import { Component, OnInit } from '@angular/core';
import {
  VideojuegoService,
  Videojuego,
} from '../../services/videojuego.service';
import { AlertController, ModalController } from '@ionic/angular';
import { VideojuegoFormComponent } from '../videojuego-form/videojuego-form.component';

@Component({
  selector: 'app-videojuego-list',
  templateUrl: './videojuego-list.component.html',
  styleUrls: ['./videojuego-list.component.scss'],
})
export class VideojuegoListComponent implements OnInit {
  videojuegos: Videojuego[] = []; // Lista de videojuegos

  constructor(
    private videojuegoService: VideojuegoService, // Servicio de videojuegos
    private alertController: AlertController, // Controlador de alertas
    private modalController: ModalController // Controlador de modales
  ) {}

  ngOnInit() {
    this.loadVideojuegos(); // Cargar los videojuegos cuando se inicie el componente
  }

  // Cargar todos los videojuegos desde el servicio
  loadVideojuegos() {
    this.videojuegoService.getVideojuegos().subscribe((videojuegos) => {
      this.videojuegos = videojuegos;
    });
  }

  // Abrir el modal para agregar un nuevo videojuego
  async addVideojuego() {
    const modal = await this.modalController.create({
      component: VideojuegoFormComponent, // Componente de formulario de videojuego
    });

    // Al cerrar el modal, recargar la lista de videojuegos
    modal.onDidDismiss().then(() => {
      this.loadVideojuegos();
    });

    return await modal.present(); // Mostrar el modal
  }

  // Abrir el modal para editar un videojuego existente
  async editVideojuego(videojuego: Videojuego) {
    const modal = await this.modalController.create({
      component: VideojuegoFormComponent, // Componente de formulario de videojuego
      componentProps: { videojuego }, // Pasar el videojuego como propiedad
    });

    // Al cerrar el modal, recargar la lista de videojuegos
    modal.onDidDismiss().then(() => {
      this.loadVideojuegos();
    });

    return await modal.present(); // Mostrar el modal
  }

  // Confirmar la eliminación de un videojuego
  async deleteVideojuego(id: number) {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Estás seguro de que deseas eliminar este videojuego?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel', // Cancelar la acción
        },
        {
          text: 'Eliminar',
          handler: () => {
            // Eliminar el videojuego y recargar la lista
            this.videojuegoService.deleteVideojuego(id).subscribe(() => {
              this.loadVideojuegos();
            });
          },
        },
      ],
    });

    await alert.present(); // Mostrar la alerta
  }
}
