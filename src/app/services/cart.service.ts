import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// service to establish communication between components about number of items in cart
@Injectable({
  providedIn: 'root'
})
export class CartService {

  private itemsSubject = new BehaviorSubject<number>(0);
  items$ = this.itemsSubject.asObservable();

  constructor() {
    //value is stored and retrieved from localstorage
    const cartItems = localStorage.getItem('cartItems');
    if (cartItems !== null) {
      this.itemsSubject.next(parseInt(cartItems, 10));
    } else {
      this.itemsSubject.next(0);
    }
  }

  //adds a number of items to the current value
  addItems(value: number) {
    const newValue = this.itemsSubject.getValue() + value;
    this.itemsSubject.next(newValue);
    localStorage.setItem('cartItems', newValue.toString());
  }

}
