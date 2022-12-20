import { Product } from './../models/product.interface';
import { Cart } from './../models/cart.interface';
import { delay, Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StockInventoryService {
  private dataSource = of([
    { "id": 1, "price": 2800, "name": "MacBook Pro" },
    { "id": 2, "price": 50, "name": "USB-C Adaptor" },
    { "id": 3, "price": 400, "name": "iPod" },
    { "id": 4, "price": 900, "name": "iPhone" },
    { "id": 5, "price": 600, "name": "Apple Watch" }
  ]).pipe(delay(1000))

  constructor(private httpClient: HttpClient) { }

  getCarts(): Observable<Cart[]> {
    return this.httpClient.get<Cart[]>('api/carts')
  }

  getProducts(): Observable<Product[]> {
    return this.dataSource
  }

}