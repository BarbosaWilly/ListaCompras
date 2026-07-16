import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemList } from "./itemList";
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-minha-lista',
  imports: [FormsModule],
  templateUrl: './minha-lista.component.html',
  styleUrl: './minha-lista.component.scss'
})
export class MinhaListaComponent {
  item: string = '';
  qty?: number;
  list: ItemList[] = [];
  isDark = false;
  errorMessage: string = '';

  constructor(private storage: StorageService) { }

  ngOnInit(): void {
    this.list = this.storage.load();
  }

  addItem() {
    const trimmedName = this.item.trim();

    // 1. Validação de campos vazios ou quantidade zerada/negativa
    if (
      trimmedName === '' ||
      this.qty === undefined ||
      this.qty === null ||
      this.qty <= 0
    ) {
      this.errorMessage = 'Please enter a valid item and a quantity greater than zero.';
      return;
    }

    // 2. Nova validação: Limite máximo de 1000 unidades
    if (this.qty > 1000) {
      this.errorMessage = 'The maximum allowed quantity is 1000.';
      return;
    }

    // Caminho feliz
    const itemList = new ItemList();
    itemList.name = trimmedName;
    itemList.qty = this.qty;
    this.list.push(itemList);
    this.saveList();

    this.item = '';
    this.qty = undefined;
    this.errorMessage = ''; 
  }

  toggleItemStatus(item: ItemList) {
    item.buyed = !item.buyed;
    this.saveList();
  }

  eraseItem() {
    this.list = [];
    this.storage.clear();
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    document.body.classList.toggle('dark-theme', this.isDark);
  }

  clearError(): void {
    if (this.errorMessage) {
      this.errorMessage = '';
    }
  }

  clearChecked(): void {
    this.list = this.list.filter(item => !item.buyed);
    this.saveList();
  }

  saveList(): void {
    this.storage.save(this.list);
  }
}
