import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Output() onAddToCart = new EventEmitter();

  productList: any[] = [
    {
      id: 1,
      name: 'Iphone 12',
      price: 35000000,
      image: 'assets/images/iphone-12.jpeg',
    },
    {
      id: 2,
      name: 'Samsung note 20',
      price: 25000000,
      image: 'assets/images/samsung-note-20.jpeg',
    },
    {
      id: 1,
      name: 'Xiaomi mi 10',
      price: 15000000,
      image: 'assets/images/xiaomi-mi-10.jpeg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  handleAddToCart(product) {
    this.onAddToCart.emit(product);
  }
}
