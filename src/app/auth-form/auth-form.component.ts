import { Component, ContentChild, EventEmitter, OnInit, Output ,AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { filter, tap } from 'rxjs';
import { AuthRemembreMeComponent } from './auth-remembre-me.component';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit,AfterContentInit {
  @ContentChild(AuthRemembreMeComponent) remembre !: AuthRemembreMeComponent  
  @ContentChildren(AuthRemembreMeComponent) remembres !: QueryList<AuthRemembreMeComponent>  
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
    
    this.remembre.remember.subscribe(($event:MatSlideToggleChange)=>this.showMessage =$event.checked)
    if(this.remembres){
      console.log(this.remembres)
      this.remembres.forEach(co=>co.remember.pipe(
        tap(($event:MatSlideToggleChange)=>this.showMessage =$event.checked)
      ).subscribe())
    }
  }

  ngOnInit(): void {
  }

}
