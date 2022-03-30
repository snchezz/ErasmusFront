import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { InforabidaComponent } from './componentes/inforabida/inforabida.component';
import { InfocarlomariaComponent } from './componentes/infocarlomaria/infocarlomaria.component';
import { BlograbidaComponent } from './componentes/blograbida/blograbida.component';
import { BlogcarlomariaComponent } from './componentes/blogcarlomaria/blogcarlomaria.component';
import { LoginComponent } from './componentes/login/login.component';
import { LoginresetComponent } from './componentes/loginreset/loginreset.component';
import { TutorialImgurComponent } from './componentes/tutorial-imgur/tutorial-imgur.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { Error404Component } from './componentes/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InforabidaComponent,
    InfocarlomariaComponent,
    BlograbidaComponent,
    BlogcarlomariaComponent,
    LoginComponent,
    LoginresetComponent,
    TutorialImgurComponent,
    ContactoComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
