import { Component, OnInit,Directive, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

