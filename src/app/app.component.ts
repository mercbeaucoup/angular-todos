import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RepositoryService } from './services/repository.service';
import { Item } from './item';

import { TodoDisplayComponent } from './todo-display/todo-display.component';
import { TodoSaverComponent } from './todo-saver/todo-saver.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, TodoDisplayComponent, TodoSaverComponent],
  providers: [RepositoryService],
  templateUrl: './app.component.html',
})
export class App implements OnInit {
  savedTodos: Item[] = [];

  constructor(private repository: RepositoryService) {}

  ngOnInit() {
    this.repository.getLocallyStoredTodos();
    this.savedTodos = this.repository.getTodos();
  }

  public handleNewTodo(newTodo: string) {
    this.repository.saveTodo(newTodo);
    this.savedTodos = this.repository.getTodos();
  }

  public handleRemoveTodo(todo: Item) {
    this.repository.removeTodo(todo);
    this.savedTodos = this.repository.getTodos();
  }

  public handleUpdateTodo(todo: Item) {
    this.repository.updateTodo(todo);
    this.savedTodos = this.repository.getTodos();
  }
}
