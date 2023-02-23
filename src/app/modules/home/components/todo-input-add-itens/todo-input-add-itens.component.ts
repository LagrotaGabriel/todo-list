import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss'],
})
export class TodoInputAddItensComponent {
  public novoItem: string = '';

  @Output()
  public enviarNovoItem = new EventEmitter();

  public getDados() {
    this.novoItem = this.novoItem.trim();
    if (this.novoItem) {
      this.enviarNovoItem.emit(this.novoItem);
      this.novoItem = '';
    }
  }
}
