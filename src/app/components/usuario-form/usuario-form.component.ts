import { Component, OnInit, Input } from '@angular/core';
import { UsuarioService, Usuario } from '../../services/usuario.service';
import {
  VideojuegoService,
  Videojuego,
} from '../../services/videojuego.service';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss'],
})
export class UsuarioFormComponent implements OnInit {
  @Input() usuario?: Usuario;
  usuarioForm!: FormGroup;
  videojuegosDisponibles: Videojuego[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private videojuegoService: VideojuegoService,
    private modalController: ModalController,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.loadVideojuegos();

    this.usuarioForm = this.formBuilder.group({
      nombreUsuario: [this.usuario?.nombreUsuario || '', Validators.required],
      correo: [
        this.usuario?.correo || '',
        [Validators.required, Validators.email],
      ],
      contrasena: [this.usuario?.contrasena || '', Validators.required],
      listaVideojuegos: [this.usuario?.listaVideojuegos || []],
    });
  }

  loadVideojuegos() {
    this.videojuegoService.getVideojuegos().subscribe((videojuegos) => {
      this.videojuegosDisponibles = videojuegos;
    });
  }

  saveUsuario() {
    const data = this.usuarioForm.value;

    if (this.usuario) {
      // Editar usuario existente
      const usuarioActualizado: Usuario = {
        ...this.usuario,
        ...data,
      };

      // Actualizar usuario
      this.usuarioService
        .updateUsuario(usuarioActualizado.id!, usuarioActualizado)
        .subscribe(() => {
          this.modalController.dismiss(true);
        });
    } else {
      // Crear nuevo usuario
      this.usuarioService.addUsuario(data).subscribe(() => {
        this.modalController.dismiss(true);
      });
    }
  }

  dismiss() {
    this.modalController.dismiss();
  }
}
