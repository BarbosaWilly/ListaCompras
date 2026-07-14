import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemList } from "./itemList";

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

  addItem() {
    let itemList = new ItemList();
    itemList.name = this.item;
    itemList.qty = this.qty;
    this.list.push(itemList);
    console.table(this.list);
    this.item = '';
    this.qty = undefined;
  }

  toggleItemStatus(item: ItemList) {
    item.buyed = !item.buyed;
  }

  eraseItem() {
    this.list = [];
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    document.body.classList.toggle('dark-theme', this.isDark);
  }

}
