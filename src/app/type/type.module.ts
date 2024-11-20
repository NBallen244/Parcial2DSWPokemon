import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeDetailComponent } from './type-detail/type-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TypeDetailComponent],
  exports: [TypeDetailComponent]
})
export class TypeModule { }
