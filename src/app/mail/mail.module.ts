import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailFolderComponent } from './container/mail-folder.component';
import { MailAppComponent } from './components/mail-app/mail-app.component';
import { MailItemComponent } from './components/mail-item/mail-item.component';
import { MailViewComponent } from './components/mail-view/mail-view.component';
import { AngularMaterialModule } from '../angular-material.module';
import { RouterModule, Routes } from '@angular/router';
export const ROUTES: Routes = [
];


@NgModule({
  declarations: [
    MailFolderComponent,
    MailAppComponent,
    MailItemComponent,
    MailViewComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    MailFolderComponent,
    MailAppComponent,
    MailItemComponent,
    MailViewComponent
  ]
})
export class MailModule { }
