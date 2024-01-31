import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './SC-Boutique/pages/contact/contact.component';
import { PrincipalComponent } from './SC-Boutique/pages/principal/principal.component';
import { AccesoriosComponent } from './SC-Boutique/pages/accesorios/accesorios.component';
import { BlusasComponent } from './SC-Boutique/pages/blusas/blusas.component';
import { PantalonesComponent } from './SC-Boutique/pages/pantalones/pantalones.component';
import { VestidosComponent } from './SC-Boutique/pages/vestidos/vestidos.component';

const routes: Routes = [
  {
    path: 'home',
    component: PrincipalComponent
  },
  {
    path: 'contacto',
    component: ContactComponent
  },
  {
    path: 'accesorios',
    component: AccesoriosComponent
  },
  {
    path: 'blusas',
    component: BlusasComponent
  },
  {
    path: 'pantalones',
    component: PantalonesComponent
  },
  {
    path: 'vestidos',
    component: VestidosComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
