import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { HeaderComponent } from './components/header/header.component';
import { C404Component } from './components/c404/c404.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactoComponent,
    ServiciosComponent,
    HeaderComponent,
    C404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }