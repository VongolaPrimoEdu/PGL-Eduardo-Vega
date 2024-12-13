import { Component, OnInit } from '@angular/core';
import { UsuarioService, Usuario } from '../../services/usuario.service';
import { ModalController, AlertController } from '@ionic/angular';
import { UsuarioFormComponent } from '../usuario-form/usuario-form.component';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.scss'],
})
export class UsuarioListComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private modalController: ModalController,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.loadUsuarios();
  }

  loadUsuarios() {
    this.usuarioService.getUsuarios().subscribe((data) => {
      this.usuarios = data;
    });
  }

  async addUsuario() {
    const modal = await this.modalController.create({
      component: UsuarioFormComponent,
    });
    modal.onDidDismiss().then(() => {
      this.loadUsuarios();
    });
    return await modal.present();
  }

  async editUsuario(usuario: Usuario) {
    const modal = await this.modalController.create({
      component: UsuarioFormComponent,
      componentProps: { usuario },
    });
    modal.onDidDismiss().then(() => {
      this.loadUsuarios();
    });
    return await modal.present();
  }

  async deleteUsuario(id: number) {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Estás seguro de que deseas eliminar este usuario?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.usuarioService.deleteUsuario(id).subscribe(() => {
              this.loadUsuarios();
            });
          },
        },
      ],
    });

    await alert.present();
  }
}
