import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarreraFormComponent } from './carrera/form/carrera.form.component';


const routes: Routes = [
  {path: 'carrera', component:CarreraFormComponent},
  {path: 'carrera/:id', component:CarreraFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
