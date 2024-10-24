import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedButtonComponent } from './shared-button/shared-button.component';



@NgModule({
  declarations: [],
  imports: [
    SharedButtonComponent,
    CommonModule
  ],
  exports: [
    SharedButtonComponent,
    CommonModule
  ]
})
export class SharedModule { }
