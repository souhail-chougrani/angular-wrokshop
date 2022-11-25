import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-auth-remembre-me',
  template: `
    <mat-slide-toggle (change)="remember.emit($event)">Keep me logged in</mat-slide-toggle>
  `
})
export class AuthRemembreMeComponent implements OnInit {
  @Output() remember = new EventEmitter<MatSlideToggleChange>();
  constructor() { }

  ngOnInit(): void {
  }

}
