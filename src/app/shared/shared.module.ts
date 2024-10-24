import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedButtonComponent } from './shared-button/shared-button.component';
import { SharedInputComponent } from './shared-input/shared-input.component';



@NgModule({
  declarations: [],
  imports: [
    SharedButtonComponent,
    SharedInputComponent,
    CommonModule
  ],
  exports: [
    SharedButtonComponent,
    SharedInputComponent,
    CommonModule
  ]
})
export class SharedModule { }
