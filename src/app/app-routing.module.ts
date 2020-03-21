import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NgIfngForComponent } from './components/ng-ifng-for/ng-ifng-for.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ClassInterfaceComponent } from './components/class-interface/class-interface.component';
import { ComPadreComponent } from './components/com-padre/com-padre.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';


const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "ngIf-ngFor", component: NgIfngForComponent },
  { path: "ngSwitch", component: NgSwitchComponent },
  { path: "ngClass", component: NgClassComponent },
  { path: "ngStyle", component: NgStyleComponent },
  { path: "dataBinding", component: DataBindingComponent },
  { path: "pipes", component: PipesComponent },
  { path: "formulario", component: FormularioComponent },
  { path: "class-interface", component: ClassInterfaceComponent },
  { path: "comunicacion", component: ComPadreComponent },
  { path: "firebase", component: PeliculasComponent },
  { path: "pelicula", component: PeliculaComponent },
  { path: "pelicula/:id", component: PeliculaComponent},
  { path: "**", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
