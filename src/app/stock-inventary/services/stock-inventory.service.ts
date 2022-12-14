import { Product } from './../models/product.interface';
import { Cart } from './../models/cart.interface';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class StockInventoryService {
    constructor(private httpClient:HttpClient) { }

    getCarts():Observable<Cart[]>{
      return  this.httpClient.get<Cart[]>('api/carts')
    }

    getProducts():Observable<Product[]>{
      return  this.httpClient.get<Product[]>('api/products')
    }
    
}