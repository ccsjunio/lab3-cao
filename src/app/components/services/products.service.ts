import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  @Output() event = new EventEmitter();

  getProducts() {
    return [
      {
        id: 1,
        name: 'product 1',
        description: 'product 1 description',
        pictureUrl:
          'https://www.bonsaiempire.com/images/advanced/guise/001-lord-of-the-rings-landscape.jpg',
        altPicture: 'Bonsai tree in pottery',
        price: 172.99,
        quantity: 10,
      },
      {
        id: 2,
        name: 'product 2',
        description: 'product 2 description',
        pictureUrl:
          'https://gardenerspath.com/wp-content/uploads/2021/10/How-to-Grow-Your-First-Bonsai-Cover.jpg',
        altPicture: 'Bonsai tree in pottery again',
        price: 76.99,
        quantity: 10,
      },
    ];
  }
}
