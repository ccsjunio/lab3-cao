import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})

export class ShoppingCartComponent implements OnInit {
  products: Product[];
  constructor(private _productsService: ProductsService) {}

  ngOnInit() {
    this.products = this._productsService.getProducts();
  }


}
