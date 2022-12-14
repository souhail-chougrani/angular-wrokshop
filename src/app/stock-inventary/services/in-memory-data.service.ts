import { Cart } from './../models/cart.interface';
import { Product } from './../models/product.interface';



import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class InMemoryDataService implements InMemoryDbService {
    constructor() { }
    createDb(reqInfo?: RequestInfo | undefined): {} | Observable<{}> | Promise<{}> {

        let carts = [
           
        ] as Cart[];
        let products = [
            { "id": 1, "price": 2800, "name": "MacBook Pro" },
            { "id": 2, "price": 50, "name": "USB-C Adaptor" },
            { "id": 3, "price": 400, "name": "iPod" },
            { "id": 4, "price": 900, "name": "iPhone" },
            { "id": 5, "price": 600, "name": "Apple Watch" }
        ]

        return { carts, products };
    }

    genId<T extends Product | Cart>(collection: T[]): number {
        return collection.length > 0 ? Math.max(...collection.map(t => t.id)) + 1 : 1;
    }
}