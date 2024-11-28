import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  //Propiedad privada que almacenará la instancia del almacenamiento
  private _storage : Storage | null = null;

  constructor(private storage: Storage ) {
      //1 . inicializar el almacenamiento
      this.init();
   }
    //1 . inicializar el almacenamiento

    async init(){
      //Creando el almacen y almacendolo en storage
      const storage = await this.storage.create();
      // asigno lo que tiene la variable storage a _storage
      this._storage = storage;
    }

     // 2 Guardar la lista
     setUsuarios(usuarios: Array<{ nombre: string }>){
      //? true devolver una lista , false= null o un undefined
      this._storage?.set('usuarios', usuarios);
     }

       // 3 Obtener los datos guardados

       async getUsuarios(): Promise <Array<{nombre: string}> | null> {
        //? si hay una lista en el almacen la retorna y si no retorna un null o undefined
        const usuarios = await this._storage?.get('usuarios');

        //Si hay algo retorna la lista y si no una lista vacía  ||= OR
        return usuarios || [];
       }

       
  // 4 Limpiar el almacen y borrar todos los datos

  clearStorage(){
    this._storage?.clear();
  }

}
