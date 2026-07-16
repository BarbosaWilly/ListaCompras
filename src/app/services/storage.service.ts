import { Injectable } from '@angular/core';
import { ItemList } from '../minha-lista/itemList';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private readonly KEY = 'shopping-list';
  private readonly THEME_KEY = 'theme';

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

  saveTheme(isDark: boolean): void {
    localStorage.setItem(this.THEME_KEY, JSON.stringify(isDark));
  }

  loadTheme(): boolean {
    const theme = localStorage.getItem(this.THEME_KEY);
    return theme ? JSON.parse(theme) : false;
  }
}