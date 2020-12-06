import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartExcersiceComponent } from './cart-excersice.component';

describe('CartExcersiceComponent', () => {
  let component: CartExcersiceComponent;
  let fixture: ComponentFixture<CartExcersiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartExcersiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartExcersiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
