import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.model';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  todo!: Todo;
  todos!: Todo[] ;
  actionLabel!: string ;
  constructor(private api: ApiService) { }
  ngOnInit() {
    this.todo = new Todo; 
    this.actionLabel = 'ADD';
   
    this.loadTodos();
  }
  addTodo() {
    if (this.todo.id) {
      
      return;
    }
    this.api.ApiaddTodo(this.todo)
     alert("Successfully Added")
      this.loadTodos();
  }
  async loadTodos() {
    const { data, error } = await this.api.ApiViewTodos();
    if (data) {
      this.todos = data;
    } else {
      console.error('Error fetching todos:', error);
    }
  }
  

  async deleteTodo(todoId: number) {
    const { data, error } = await this.api.ApideleteTodo(todoId);
    if (data) {
      this.loadTodos();
    } else {
       alert("Successfully Deleted");
      this.loadTodos();
    }
  }



}
