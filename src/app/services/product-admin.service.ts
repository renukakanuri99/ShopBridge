import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItemModel } from '../models/ItemModel';

@Injectable({
  providedIn: 'root'
})
export class ProductAdminService {

  constructor(private http: HttpClient) { }

  getItems(): Observable<ItemModel[]> {
    return this.http.get<ItemModel[]>("http://localhost:3000/items");
  }

  addItem(item: ItemModel): Observable<ItemModel> {
    return this.http.post<ItemModel>("http://localhost:3000/items", item);
  }

  updateItem(item: ItemModel): Observable<ItemModel> {
    return this.http.put<ItemModel>("http://localhost:3000/items/" + item.id, item);
  }

  deleteItem(itemId: number): Observable<any> {
    return this.http.delete<any>("http://localhost:3000/items/" + itemId);
  }
}
