import { AngularMaterialModule } from './../angular-material.module';
import { CommonModule } from '@angular/common';
import { NgModule, } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StockInventoryComponent } from './container/stock-inventory.component';
import { StockBranchComponent } from './components/stock-branch/stock-branch.component';
import { StockProductsComponent } from './components/stock-products/stock-products.component';
import { StockSelectorComponent } from './components/stock-selector/stock-selector.component';
import { StockCounterComponent } from './components/stock-counter/stock-counter.component';


@NgModule({
    imports: [CommonModule,ReactiveFormsModule,AngularMaterialModule],
    exports: [StockInventoryComponent, StockSelectorComponent, StockProductsComponent, StockBranchComponent],
    declarations: [StockInventoryComponent, StockSelectorComponent, StockProductsComponent, StockBranchComponent, StockCounterComponent],
    providers: [],
})
export class StockInventoryModule { }
