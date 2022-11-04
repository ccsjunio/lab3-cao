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
        name: 'Hobbit Bonsai',
        description: 'product 1 description',
        pictureUrl:
          'https://www.bonsaiempire.com/images/advanced/guise/001-lord-of-the-rings-landscape.jpg',
        altPicture: 'Bonsai tree in pottery',
        price: 99.99,
        quantity: 1,
      },
      {
        id: 2,
        name: 'Random Bonsai',
        description: 'product 2 description',
        pictureUrl:
          'https://gardenerspath.com/wp-content/uploads/2021/10/How-to-Grow-Your-First-Bonsai-Cover.jpg',
        altPicture: 'Bonsai tree in pottery again',
        price: 69.99,
        quantity: 1,
      },
    ];
  }
}
