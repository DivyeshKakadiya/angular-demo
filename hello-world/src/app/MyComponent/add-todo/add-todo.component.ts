import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todos.';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  
  @Output() todoAdd : EventEmitter<Todo> = new EventEmitter();
  title! : string;
  description! : string;

  onSubmit(){
    const todo = {
      srno : 8,
      title : this.title,
      desc : this.description,
      active : true
    }
    this.todoAdd.emit(todo);
  }


}
