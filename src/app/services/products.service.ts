import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(
    [
      { name: "Samsung", price: 2500, description: "Very good device" },
      { name: "Apple", price: 4500, description: "Excelent device" },
      { name: "Xiaomi", price: 1500, description: "Good device" },
      { name: "Huawei", price: 1700, description: "Good device" }
    ]
  )
  selectedProduct: BehaviorSubject<Product> = new BehaviorSubject<Product>(null);
  constructor() { }


  selectProduct(name: string) {
    this.selectedProduct.next(_.find(this.products.value, { name: name }));
  }
  addProduct(product: Product) {
    this.products.next(this.products.getValue().concat([product]));
  }
  editProduct(product: Product, originalName: string) {
    let currentProductsArr: Product[] = this.products.getValue();
    let index = _.findIndex(currentProductsArr, { name: originalName });
    currentProductsArr[index] = product;
    this.products.next(currentProductsArr);
  }
  removeProduct(name: string) {
    let currentProductsArr: Product[] = this.products.getValue();
    _.remove(currentProductsArr, {name:name});
    this.products.next(currentProductsArr);
  }
}
