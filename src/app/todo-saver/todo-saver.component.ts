import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-saver',
  templateUrl: './todo-saver.component.html',
  styleUrls: ['./todo-saver.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class TodoSaverComponent {
  @Output()
  onTodoAdded: EventEmitter<string> = new EventEmitter();

  saveTodo(newTodo: string) {
    this.onTodoAdded.emit(newTodo);
  }
}