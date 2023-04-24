import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-editor',
  templateUrl: './todo-editor.component.html',
  styleUrls: ['./todo-editor.component.css'],
  imports: [CommonModule, FormsModule],
  standalone: true,
})
export class TodoEditorComponent implements OnInit {
  pendingValue: string;

  @Input() description!: string;
  @Output()
  onSaveNewDescription: EventEmitter<string> = new EventEmitter();
  @Output()
  onCancelNewDescription: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.pendingValue = this.description;
    //Autofocus on the item editor input field when it is opened
    document.getElementById('item-editor').focus();
  }

  saveNewDescription(): void {
    this.onSaveNewDescription.emit(this.pendingValue);
  }

  cancelNewDescription(): void {
    this.pendingValue = this.description;
    this.onCancelNewDescription.emit();
  }
}
