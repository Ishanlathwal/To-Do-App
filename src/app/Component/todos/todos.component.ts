import { Component, OnInit } from '@angular/core';
import { Todo } from "../../Todo"; // jo nayi file banayi h Todo.js wali 
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItem: string

  todos: Todo[];

  // todos type ka ek variable banaya h jo ki ek array h  Todo.js wali file banayi h uss type ka array string number wala

  constructor() {
    this.localItem = localStorage.getItem("todos");// taki reload p data delete na ho 
    if (this.localItem == null) {
      this.todos = []; //ye todos wala variable yaha call kia h : this k sath : jiska type h Todo.js wali file m jo class h waisa
    }
    else {
      this.todos = JSON.parse(this.localItem)
    }








  }

  ngOnInit(): void {

  }
  deleteTodo(QW: Todo)  // QW ye variable todos.component.html se aya :Todo ye class wali file
  {

    const indexxxx = this.todos.indexOf(QW) // code net se lia phle index nikala todos array ka than splice method
    //QW k total index ko indexxxx k variable p leke gaye than splice method use kia

    this.todos.splice(indexxxx, 1)


    localStorage.setItem("todos", JSON.stringify(this.todos)) // so data local save ho jaye
  }




  addTodo(QW: Todo)  // QW ye variable todos.component.html se aya :Todo ye class wali file
  {



    this.todos.push(QW);


    localStorage.setItem("todos", JSON.stringify(this.todos)) // so data local save ho jaye
  }





  toggleTodo(QW: Todo) {


    const indexx = this.todos.indexOf(QW);
    this.todos[indexx].active = !this.todos[indexx].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));

  }// checkbox


}
