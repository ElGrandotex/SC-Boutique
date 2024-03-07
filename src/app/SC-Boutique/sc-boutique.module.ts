import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './pages/contact/contact.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RouterModule } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { BlusasComponent } from './pages/blusas/blusas.component';
import { PantalonesComponent } from './pages/pantalones/pantalones.component';
import { VestidosComponent } from './pages/vestidos/vestidos.component';
import { CartComponent } from './pages/cart/cart.component';
import { ZapatosComponent } from './pages/zapatos/zapatos.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    ContactComponent,
    HomepageComponent,
    PrincipalComponent,
    BlusasComponent,
    PantalonesComponent,
    VestidosComponent,
    CartComponent,
    ZapatosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgSelectModule,
    FormsModule,
    MatSortModule,
    NoopAnimationsModule
  ],
  exports: [
    HomepageComponent
  ]
})
export class SCBoutiqueModule { }
