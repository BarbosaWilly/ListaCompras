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

  /** Mensagem de erro exibida inline abaixo do formulário. */
  errorMessage: string = '';

  addItem() {
    const trimmedName = this.item.trim();

    // Validação: nome não vazio + quantidade > 0
    if (
      trimmedName === '' ||
      this.qty === undefined ||
      this.qty === null ||
      this.qty <= 0
    ) {
      this.errorMessage =
        'Please enter a valid item and a quantity greater than zero.';
      // NÃO limpamos os inputs — a pessoa precisa ver o que digitou
      // pra entender o que errou e corrigir.
      return;
    }

    // Caminho feliz
    const itemList = new ItemList();
    itemList.name = trimmedName;
    itemList.qty = this.qty;
    this.list.push(itemList);

    this.item = '';
    this.qty = undefined;
    this.errorMessage = ''; // limpa após sucesso
  }

  toggleItemStatus(item: ItemList) {
    item.buyed = !item.buyed;
  }

  eraseItem() {
    this.list = [];
    this.errorMessage = ''; // limpa também ao resetar a lista
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    document.body.classList.toggle('dark-theme', this.isDark);
  }

  /**
   * Chamado em cada (input) dos campos. Assim que a pessoa
   * começa a corrigir, a mensagem some na hora (feedback positivo).
   */
  clearError(): void {
    if (this.errorMessage) {
      this.errorMessage = '';
    }
  }
  
}
