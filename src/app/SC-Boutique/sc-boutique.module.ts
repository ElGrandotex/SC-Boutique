import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './pages/contact/contact.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RouterModule } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { AccesoriosComponent } from './pages/accesorios/accesorios.component';
import { BlusasComponent } from './pages/blusas/blusas.component';
import { PantalonesComponent } from './pages/pantalones/pantalones.component';
import { VestidosComponent } from './pages/vestidos/vestidos.component';



@NgModule({
  declarations: [
    ContactComponent,
    HomepageComponent,
    PrincipalComponent,
    AccesoriosComponent,
    BlusasComponent,
    PantalonesComponent,
    VestidosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HomepageComponent
  ]
})
export class SCBoutiqueModule { }
