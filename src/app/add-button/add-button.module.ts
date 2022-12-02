import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddButtonComponent } from './add-button.component';
import { AngularMaterialModule } from '../angular-material.module';



@NgModule({
  declarations: [
    AddButtonComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports:[
  AddButtonComponent]
})
export class AddButtonModule { }
