import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartExcersiceComponent } from './cart-excersice.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    CartExcersiceComponent,
    ProductListComponent,
    ProductItemComponent,
    CartComponent,
  ],
  imports: [CommonModule],
  exports: [CartExcersiceComponent],
})
export class CartExcersiceModule {}
