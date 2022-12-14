import { Product } from './../../models/product.interface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'stock-products',
  templateUrl: './stock-products.component.html',
  styleUrls: ['./stock-products.component.scss']
})
export class StockProductsComponent implements OnInit {
  @Output()
  delete:EventEmitter<any> = new EventEmitter();
  @Input()
  parent!: FormGroup;

 
  constructor() { }

  ngOnInit(): void {
  }
}
