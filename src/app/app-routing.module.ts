import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogcarlomariaComponent } from './componentes/blogcarlomaria/blogcarlomaria.component';
import { BlograbidaComponent } from './componentes/blograbida/blograbida.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { Error404Component } from './componentes/error404/error404.component';
import { HomeComponent } from './componentes/home/home.component';
import { InfocarlomariaComponent } from './componentes/infocarlomaria/infocarlomaria.component';
import { InforabidaComponent } from './componentes/inforabida/inforabida.component';
import { LoginComponent } from './componentes/login/login.component';
import { LoginresetComponent } from './componentes/loginreset/loginreset.component';
import { TutorialImgurComponent } from './componentes/tutorial-imgur/tutorial-imgur.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'blog_rabida', component: BlograbidaComponent },
  { path: 'blog_carlomaria', component: BlogcarlomariaComponent },
  { path: 'informacion_rabida', component: InforabidaComponent },
  { path: 'informacion_carlomaria', component: InfocarlomariaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'reset_login', component: LoginresetComponent },
  { path: 'tutorial_imgur', component: TutorialImgurComponent },

  { path: '', component: HomeComponent },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
