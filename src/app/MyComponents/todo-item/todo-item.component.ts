import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',

  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {


  @Input() todo: Todo;
  @Input() i: number;
  @Output() todoCheckBox: EventEmitter<Todo> = new EventEmitter();
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log("Conclick has been Trigered");
  }
  onCheckboxClick(todo) {
    console.log(todo)
    this.todoCheckBox.emit(todo);
    console.log(todo)
  }
}
