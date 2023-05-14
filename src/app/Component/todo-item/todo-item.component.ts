import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() ASD: Todo; //parent to child 


  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter(); // Ye data delete karne k lia event emmiter lagaya h . <Todo> ye wo class wali file h ki jab click ho event emit ho yaha se aur uss class k type ka data array se delete ho jaye


  // ye ASD variable h jiske pass QW ki value h   aur uss  QW k pass todos ki value h  todos.compontne.html se aya h

  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter(); // ye checkbox ka event emmiter

  deleteData(ASD: Todo) {

    this.todoDelete.emit(ASD);

    console.log("delete data")
  }

  // ASD wala variable jo delete data wale button p h jokiTODO.ts wali file ki class jaisa h 


  //1 deleteData wala button k lia function likha h ye
  //2 ASD wala variable jispe QW ki value thi Jis QW p todos wale variable ki value thi
  //3  yaha p event emmitter lagaya h todo.item.component .ts se emit krke todos.component.ts jaha array h waha catch karwane k lia







  onCheckboxClick(ASD) {

    this.todoCheckbox.emit(ASD);

  }

}
