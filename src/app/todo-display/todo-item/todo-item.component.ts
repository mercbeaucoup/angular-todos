import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../../item';
import { TodoEditorComponent } from './todo-editor/todo-editor.component';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  imports: [CommonModule, TodoEditorComponent],
  standalone: true,
})
export class TodoItemComponent {
  @Input() item!: Item;

  editable: boolean = false;

  @Output()
  onRemoveTodo: EventEmitter<Item> = new EventEmitter();
  @Output()
  onUpdateTodo: EventEmitter<Item> = new EventEmitter();

  toggleStatus(item: Item): void {
    this.item.done = !this.item.done;
    this.onUpdateTodo.emit(item);
  }

  removeTodo(item: Item): void {
    this.onRemoveTodo.emit(item);
  }

  closeEditor(): void {
    this.editable = !this.editable;
  }

  saveNewTodoDescription(newDescription: string): void {
    this.editable = !this.editable;
    this.item.description = newDescription;
    this.onUpdateTodo.emit({
      ...this.item,
      description: newDescription,
    });
  }
}
