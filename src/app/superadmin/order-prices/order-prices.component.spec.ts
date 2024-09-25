import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPricesComponent } from './order-prices.component';

describe('OrderPricesComponent', () => {
  let component: OrderPricesComponent;
  let fixture: ComponentFixture<OrderPricesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderPricesComponent]
    });
    fixture = TestBed.createComponent(OrderPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
