import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  nombres: string = '';
  apellidos: string = '';
  correo: string = '';
  usuario: string = '';
  contrasena: string = '';
  repetirContrasena: string = '';

  constructor(private router: Router, private alertController: AlertController) {}

  ngOnInit() {}

  async registrar() {
    if (
      this.nombres &&
      this.apellidos &&
      this.correo &&
      this.usuario &&
      this.contrasena &&
      this.repetirContrasena &&
      this.contrasena === this.repetirContrasena
    ) {
      const nuevoUsuario = {
        nombres: this.nombres,
        apellidos: this.apellidos,
        correo: this.correo,
        usuario: this.usuario,
        contrasena: this.contrasena,
      };

      localStorage.setItem(this.usuario, JSON.stringify(nuevoUsuario));

      const successAlert = await this.alertController.create({
        header: 'Éxito',
        message: 'Registro exitoso. Puede iniciar sesión.',
        buttons: ['OK'],
      });

      await successAlert.present();

      this.router.navigate(['/login']);
    } else {
      const errorAlert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, complete todos los campos y asegúrese de que las contraseñas coincidan.',
        buttons: ['OK'],
      });

      await errorAlert.present();
    }
  }
  regresarAHome() {
    window.history.back();
}
}
