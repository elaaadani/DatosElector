import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatosElectorComponent } from './datos-elector/datos-elector.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
{
  path: '',
  component:HomeComponent
},
{
  path:'DatosElectorales/:rut',
  component:DatosElectorComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
