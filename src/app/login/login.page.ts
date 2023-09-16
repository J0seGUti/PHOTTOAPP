import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: string = '';
  contrasena: string = '';

  constructor(private router: Router, private alertController: AlertController) {}

  ngOnInit() {}

  async iniciarSesion() {
    if (!this.usuario || !this.contrasena) {
      const errorAlert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, complete todos los campos.',
        buttons: ['OK'],
      });

      await errorAlert.present();
      return;
    }

    const usuarioRegistradoStr = localStorage.getItem(this.usuario);

    if (usuarioRegistradoStr) {
      const usuarioRegistrado = JSON.parse(usuarioRegistradoStr);

      if (usuarioRegistrado.contrasena === this.contrasena) {
        this.router.navigate(['/home']);
      } else {
        const errorAlert = await this.alertController.create({
          header: 'Error',
          message: 'Credenciales incorrectas. Por favor, inténtelo de nuevo.',
          buttons: ['OK'],
        });

        this.usuario = '';
        this.contrasena = '';

        await errorAlert.present();
      }
    } else {
      const errorAlert = await this.alertController.create({
        header: 'Error',
        message: 'El usuario no está registrado.',
        buttons: ['OK'],
      });

      await errorAlert.present();
    }
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToRegister() {
    this.router.navigate(['/registro']);
  }
}
