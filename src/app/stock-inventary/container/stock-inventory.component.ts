import { Cart } from './../models/cart.interface';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { StockInventoryService } from '../services/stock-inventory.service';
import { Product } from './../models/product.interface';
import { forkJoin, of, switchMap, tap } from 'rxjs'
@Component({
  selector: 'stock-inventory',
  templateUrl: 'stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.scss']
})

export class StockInventoryComponent implements OnInit {

  products: Product[] = [];
  form: FormGroup<{ store: FormGroup<{ branch: FormControl<string | null>; code: FormControl<string | null>; }>; selector: FormGroup<{ id: FormControl<string | null>; quantity: FormControl<number | null>; }>; stock: FormArray<any>; }>;
  constructor(private fb: FormBuilder, private stockInventoryService: StockInventoryService) {

    this.form = this.fb.group({
      store: this.fb.group({
        branch: '',
        code: ''
      }),
      selector: this.fb.group({
        id: '',
        quantity: 10
      }),
      stock: this.fb.array([])
    })

  }

  createNewStock(value:Cart){
    const {id,quantity} = value;
    return this.fb.group({
        id:id ,
        quantity: quantity   
    })
  }



  ngOnInit(): void {
    
  }


  onSubmit() {
    console.log('Submit:', this.form.value);
  }
}