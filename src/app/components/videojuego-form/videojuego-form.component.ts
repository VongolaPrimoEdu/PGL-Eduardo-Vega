import { Component, OnInit, Input } from '@angular/core';
import {
  VideojuegoService,
  Videojuego,
} from '../../services/videojuego.service';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-videojuego-form',
  templateUrl: './videojuego-form.component.html',
  styleUrls: ['./videojuego-form.component.scss'],
})
export class VideojuegoFormComponent implements OnInit {
  @Input() videojuego?: Videojuego; // Entrada opcional para un videojuego existente
  videojuegoForm!: FormGroup; // Formulario reactivo

  constructor(
    private videojuegoService: VideojuegoService, // Servicio para gestionar videojuegos
    private modalController: ModalController, // Controlador de modales
    private formBuilder: FormBuilder // Formulario reactivo
  ) {}

  ngOnInit() {
    // Inicializamos el formulario con los valores del videojuego, si es que se pasa uno
    this.videojuegoForm = this.formBuilder.group({
      nombre: [this.videojuego?.nombre || '', Validators.required],
      fechaLanzamiento: [
        this.videojuego?.fechaLanzamiento || '',
        Validators.required,
      ],
      genero: [this.videojuego?.genero || '', Validators.required],
      plataforma: [this.videojuego?.plataforma || '', Validators.required],
      reseña: [this.videojuego?.resena || '', Validators.required],
      precio: [
        this.videojuego?.precio || '',
        [Validators.required, Validators.min(0)],
      ],
      ventas: [
        this.videojuego?.ventas || '',
        [Validators.required, Validators.min(0)],
      ],
    });
  }

  // Guardar el videojuego (crear o actualizar)
  saveVideojuego() {
    const data = this.videojuegoForm.value;

    if (this.videojuego) {
      // Si ya existe un videojuego, se actualiza
      const videojuegoActualizado: Videojuego = {
        ...this.videojuego,
        ...data,
      };

      this.videojuegoService
        .updateVideojuego(videojuegoActualizado.id!, videojuegoActualizado)
        .subscribe(() => {
          this.modalController.dismiss(true); // Cierra el modal después de guardar
        });
    } else {
      // Si es un nuevo videojuego, se crea
      this.videojuegoService.createVideojuego(data).subscribe(() => {
        this.modalController.dismiss(true); // Cierra el modal después de guardar
      });
    }
  }

  // Cerrar el modal sin guardar cambios
  dismiss() {
    this.modalController.dismiss();
  }
}
