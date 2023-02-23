import { TaskList } from './../../model/task-list';
import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  public taskList: Array<TaskList> = [
    { task: 'Ir no mercado', checked: true },
    { task: 'Comprar sorvete', checked: false },
  ];
}
