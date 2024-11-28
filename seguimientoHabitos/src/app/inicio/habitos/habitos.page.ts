import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-habitos',
  templateUrl: './habitos.page.html',
  styleUrls: ['./habitos.page.scss'],
})

export class HabitosPage implements OnInit {

  habito: string = "";

  
  nombreUsuario: string = "";//almacena el nombre del usuario
  usuarios: Array<{nombre: string }>= [];//almacena mi Lista de usuarios

  constructor(private router: Router,private alertController: AlertController, private storage:StorageService) { }

  ngOnInit() {
    this.obtenerUsuario();
  }

  async presentAlert(titulo: string, msj: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: msj,
      buttons: ['OK']
    });
    await alert.present();
  }

  menuPrincipal(){
    this.router.navigate(['/inicio']);
  }

  menuHabitos(){
    this.router.navigate(['/habitos']);
  }

  menuActividad(){
    this.router.navigate(['/inicio/ayuda']);
  }

  cerrarSesion(){
    this.presentAlert('Cerrar sesion','Ha cerrado sesion.')
    this.router.navigate(['/login']);
  }
  
//////////////////////////////////////////////////////////////////////////////////////
  //persistencia

  //1- Función para agregar un usuario a la lista
  async agregarUsuario(){
    const nuevoUsuario = { nombre: this.nombreUsuario };
  //agrego el usuario al final de la lista  
  this.usuarios.push(nuevoUsuario);
  await this.storage.setUsuarios(this.usuarios);
  console.log("usuario guardado");
  }
  //2- Función para obtener
  async obtenerUsuario(){
    this.usuarios = await this.storage.getUsuarios() || [];
    console.log("usuarios obtenidos", this.usuarios);
  }
  //3 - Función para limpiar los datos
  async limpiarDatos(){
    await this.storage.clearStorage();
    this.usuarios = [];
    console.log("Almacen vacío");
  }
}
