import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  selectedProduct: Observable<Product>;
  form: FormGroup;
  constructor(    private formBuilder: FormBuilder,
    private productsService: ProductsService) {
    this.selectedProduct = productsService.selectedProduct.asObservable();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
    });
  }
  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }

}
