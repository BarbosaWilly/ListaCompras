import { Component } from '@angular/core';
import { MinhaListaComponent } from "./minha-lista/minha-lista.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [MinhaListaComponent, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ListaCompras';
}
