import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// service to establish communication between components about the number of product items and their order to display
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private itemsSubject = new BehaviorSubject<number>(12);
  items$ = this.itemsSubject.asObservable();

  setItems(value: number) {
    this.itemsSubject.next(value);
  }

}
