import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {
  @Output()
  submited:EventEmitter<any> = new EventEmitter<any>();
  logingForm!:FormGroup;
  constructor(private fb:FormBuilder) {
    this.logingForm = this.fb.group({
      username:null,
      password:null
    })
  }

  ngOnInit(): void {
  }

}
