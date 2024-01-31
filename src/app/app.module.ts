import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './app/shared/components/sidebar/sidebar.component';
import { HomepageComponent } from './SC-Boutique/pages/homepage/homepage.component';
import { ContactComponent } from './SC-Boutique/pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomepageComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
