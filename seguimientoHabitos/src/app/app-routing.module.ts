import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutenticacionGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule), canActivate: [AutenticacionGuard]//Protegiendo la ruta
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule), canActivate: [AutenticacionGuard]//Protegiendo la ruta
  },
  {
    path: '**',
    loadChildren: () => import('./paginas/error404/error404.module').then( m => m.Error404PageModule) //### Ruta para manejar 404
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./paginas/configuracion/configuracion.module').then( m => m.ConfiguracionPageModule), canActivate: [AutenticacionGuard] //### Aplica el guard a la ruta
   },
   
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
