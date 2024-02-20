import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class FakeStoreAPIService {

  private readonly API_URL = 'https://fakestoreapi.com/';

  constructor(private http: HttpClient) {}

  //methods for product endpoints

  getProducts() {
    return this.http.get<Product[]>(this.API_URL + 'products');
  }
  
}
