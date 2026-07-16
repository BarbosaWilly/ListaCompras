import { Injectable } from '@angular/core';
import { ItemList } from '../minha-lista/itemList';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private readonly KEY = 'shopping-list';

  save(list: ItemList[]): void {
    localStorage.setItem(this.KEY, JSON.stringify(list));
  }

  load(): ItemList[] {
    const data = localStorage.getItem(this.KEY);
    return data ? JSON.parse(data) : [];
  }

  clear(): void {
    localStorage.removeItem(this.KEY);
  }
}