import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// service to establish communication between components about the number of product items and their order to display
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private itemsSubject = new BehaviorSubject<number>(12);
  items$ = this.itemsSubject.asObservable();
  private sortFieldSubject = new BehaviorSubject<string>('Price');
  sortField$ = this.sortFieldSubject.asObservable();
  private orderSubject = new BehaviorSubject<string>('ASC');
  order$ = this.orderSubject.asObservable();

  setItems(value: number) {
    this.itemsSubject.next(value);
  }

  setSortField(value: string) {
    this.sortFieldSubject.next(value);
  }

  setOrder(value: string) {
    this.orderSubject.next(value);
  }

}
