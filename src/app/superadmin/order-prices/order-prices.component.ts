import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderPrice } from '../../models/order-price.model';

@Component({
  selector: 'app-order-prices',
  templateUrl: './order-prices.component.html',
  styleUrls: ['./order-prices.component.css']
})
export class OrderPricesComponent implements OnInit {
  orderPricesForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.orderPricesForm = this.fb.group({
      id: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.orderPricesForm.valid) {
      console.log(this.orderPricesForm.value);
    }
  }
}
