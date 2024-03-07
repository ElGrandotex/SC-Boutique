import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './SC-Boutique/pages/contact/contact.component';
import { PrincipalComponent } from './SC-Boutique/pages/principal/principal.component';
import { BlusasComponent } from './SC-Boutique/pages/blusas/blusas.component';
import { PantalonesComponent } from './SC-Boutique/pages/pantalones/pantalones.component';
import { VestidosComponent } from './SC-Boutique/pages/vestidos/vestidos.component';
import { CartComponent } from './SC-Boutique/pages/cart/cart.component';
import { ZapatosComponent } from './SC-Boutique/pages/zapatos/zapatos.component';

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
    path: 'blusas',
    component: BlusasComponent
  },
  {
    path: 'pantalones',
    component: PantalonesComponent
  },
  {
    path: 'zapatos',
    component: ZapatosComponent
  },
  {
    path: 'vestidos',
    component: VestidosComponent
  },
  {
    path: 'cart',
    component: CartComponent
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
