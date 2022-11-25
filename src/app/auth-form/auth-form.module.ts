import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthFormComponent } from './auth-form.component';
import { AngularMaterialModule } from '../angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule,ReactiveFormsModule,AngularMaterialModule],
    exports: [AuthFormComponent],
    declarations: [AuthFormComponent],
    providers: [],
})
export class AuthFormModule { }
