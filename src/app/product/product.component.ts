import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  }
  public selectProduct() {
    this.productsService.selectProduct(this.product.name);
  }
  public delete() {
    this.productsService.removeProduct(this.product.name);
  }

}
