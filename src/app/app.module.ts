import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from "@angular/core";

//Modulos
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

//Internalizacion
//internacionalizacion
registerLocaleData(LocaleEs, "es");
import { registerLocaleData } from "@angular/common";
import LocaleEs from "@angular/common/locales/es";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/includes/navbar/navbar.component';
import { FooterComponent } from './components/includes/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NgIfngForComponent } from './components/ng-ifng-for/ng-ifng-for.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { CapitalizarPipe } from './myPipes/capitalizar.pipe';
import { PasswordPipe } from './myPipes/password.pipe';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ClassInterfaceComponent } from './components/class-interface/class-interface.component';
import { ComPadreComponent } from './components/com-padre/com-padre.component';
import { ComHijoComponent } from './components/com-hijo/com-hijo.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    NgIfngForComponent,
    NgSwitchComponent,
    NgClassComponent,
    NgStyleComponent,
    DataBindingComponent,
    PipesComponent,
    CapitalizarPipe,
    PasswordPipe,
    FormularioComponent,
    ClassInterfaceComponent,
    ComPadreComponent,
    ComHijoComponent,
    PeliculasComponent,
    PeliculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "es" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
