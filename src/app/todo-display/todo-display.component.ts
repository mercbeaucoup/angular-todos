import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { Item } from '../item';

@Component({
  selector: 'app-todo-display',
  templateUrl: './todo-display.component.html',
  styleUrls: ['./todo-display.component.scss'],
  imports: [CommonModule, TodoItemComponent],
  standalone: true,
})
export class TodoDisplayComponent {
  @Input()
  itemsToDisplay: Item[] = [];

  @Output()
  onTodoRemoved: EventEmitter<Item> = new EventEmitter();
  @Output()
  onTodoUpdated: EventEmitter<Item> = new EventEmitter();

  todoRemoved(todo: Item) {
    this.onTodoRemoved.emit(todo);
  }

  todoUpdated(todo: Item) {
    this.onTodoUpdated.emit(todo);
  }
}
