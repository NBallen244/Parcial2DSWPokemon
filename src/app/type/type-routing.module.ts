import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeDetailComponent } from './type-detail/type-detail.component';

const routes: Routes = [
  {path:":name", component:TypeDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeRoutingModule { }