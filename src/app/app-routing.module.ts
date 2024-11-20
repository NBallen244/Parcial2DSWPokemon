import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListarComponent } from './pokemon/pokemon-listar/pokemon-listar.component';
import { TypeDetailComponent } from './type/type-detail/type-detail.component';

const routes: Routes = [
  {path:"", component:PokemonListarComponent},
  {path:"types/:name", component:TypeDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
