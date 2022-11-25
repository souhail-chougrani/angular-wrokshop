import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-auth-remembre-me',
  template: `
    <mat-slide-toggle (change)="remember.emit($event)">Keep me logged in</mat-slide-toggle>
  `
})
export class AuthRemembreMeComponent implements OnInit {
  @Output() remember = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

}
