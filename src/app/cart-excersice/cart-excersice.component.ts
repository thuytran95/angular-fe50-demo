import { Component, OnInit, ViewChild } from '@angular/core';
import { CartComponent } from './cart/cart.component';

@Component({
  selector: 'app-cart-excersice',
  templateUrl: './cart-excersice.component.html',
  styleUrls: ['./cart-excersice.component.scss'],
})
export class CartExcersiceComponent implements OnInit {
  @ViewChild('cartComponent') cartComponent: CartComponent;
  constructor() {}

  ngOnInit(): void {}

  handleAddToCart(product) {
    // Viết hàm handleAddToCart ở component Cart
    // Sử dụng ViewChild để gọi hàm đó
    this.cartComponent.handleAddToCart(product);
  }
}
