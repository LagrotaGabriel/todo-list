import { TaskList } from './../../model/task-list';
import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements DoCheck{
  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');

  ngDoCheck(): void {
    this.setLocalStorage();
  }

  removerItem(index: number) {
    this.taskList.splice(index, 1);
  }

  removerTodosOsItens() {
    this.taskList = [];
  }

  adicionaNovoItem(item: string) {
    this.taskList.push({ task: item, checked: false });
  }

  validaAlteracaoItem(item: string, index: number) {
    if (!item) {
      const confirm = window.confirm('Task vazia. Deseja deletar?')
      if(confirm) {
        this.removerItem(index);
      }
    }
  }

  setLocalStorage() {
    if (this.taskList) {
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem('list', JSON.stringify(this.taskList));
    }
  }
}
