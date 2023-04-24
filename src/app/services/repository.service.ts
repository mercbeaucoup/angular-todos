import { Injectable } from '@angular/core';
import { Item } from '../item';

@Injectable()
export class RepositoryService {
  private todoItems: Item[] = [];

  public saveTodo(todoToSave: string) {
    if (todoToSave) {
      let newId = new Date().getTime().toString();
      let newTodo: Item = {
        description: todoToSave,
        done: false,
        id: newId,
      };
      this.todoItems.push(newTodo);
    }
    this._storeTodos(this.todoItems);
  }

  public removeTodo(todo: Item) {
    let filteredTodos = this.todoItems.filter((todoItem) => {
      return todoItem.id !== todo.id;
    });
    this.todoItems = filteredTodos;
    this._storeTodos(this.todoItems);
  }

  public updateTodo(todo: Item) {
    let idx = this.todoItems.findIndex((todoItem) => todoItem.id === todo.id);
    this.todoItems[idx] = todo;
    this._storeTodos(this.todoItems);
  }

  public getTodos(): Item[] {
    return this.todoItems;
  }

  public getLocallyStoredTodos(): void {
    const data = localStorage.getItem('storedTodos');
    const storedTodos = data && data.length ? JSON.parse(data) : [];
    this.todoItems = storedTodos.length ? storedTodos : [];
  }

  private _storeTodos(todos: Item[]): void {
    localStorage.setItem('storedTodos', JSON.stringify(this.todoItems));
  }
}
