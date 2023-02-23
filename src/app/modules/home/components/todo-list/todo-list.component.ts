import { TaskList } from './../../model/task-list';
import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  public taskList: Array<TaskList> = [];

  removerItem(index: number) {
    this.taskList.splice(index, 1);
  }

  removerTodosOsItens() {
    this.taskList = [];
  }

  adicionaNovoItem(item: string) {
    this.taskList.push({ task: item, checked: false });
  }
}
