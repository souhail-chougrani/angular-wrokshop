import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { AuthRemembreMeComponent } from './auth-remembre-me.component';
import { Component, ContentChild, EventEmitter, OnInit, Output, ViewChild, AfterContentInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { tap } from 'rxjs';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit,AfterContentInit {
  @ContentChild(AuthRemembreMeComponent) rememberMe !:AuthRemembreMeComponent;

  @Output()
  submited:EventEmitter<any> = new EventEmitter<any>();
  logingForm!:FormGroup;
  showMessage:boolean = false;
  constructor(private fb:FormBuilder) {
    this.logingForm = this.fb.group({
      username:null,
      password:null
    })
  }
  ngAfterContentInit(): void {
    if(this.rememberMe){
      this.rememberMe.remember.pipe(tap(($event:MatSlideToggleChange)=>this.showMessage = $event.checked)).subscribe()
    }
  }

  ngOnInit(): void {
  }

}
