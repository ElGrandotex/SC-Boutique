import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './pages/contact/contact.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RouterModule } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';



@NgModule({
  declarations: [
    ContactComponent,
    HomepageComponent,
    PrincipalComponent
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
