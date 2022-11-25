import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthFormComponent } from './auth-form.component';
import { AngularMaterialModule } from '../angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRemembreMeComponent } from './auth-remembre-me.component';

@NgModule({
    imports: [CommonModule,ReactiveFormsModule,AngularMaterialModule],
    exports: [AuthFormComponent,AuthRemembreMeComponent],
    declarations: [AuthFormComponent, AuthRemembreMeComponent],
    providers: [],
})
export class AuthFormModule { }
