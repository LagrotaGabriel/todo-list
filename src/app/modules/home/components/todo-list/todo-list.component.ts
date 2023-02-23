import { TaskList } from './../../model/task-list';
import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements DoCheck{
  public taskList: Array<TaskList> = [];

  ngDoCheck(): void {
    this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
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
}
