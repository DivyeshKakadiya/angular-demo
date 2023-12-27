import { Component } from '@angular/core';
import { Todo } from 'src/app/Todos.';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  
  
      deleteTodo(todo : Todo) {
        const index = this.todos.indexOf(todo)
        this.todos.splice(index , 1);
        localStorage.setItem("todos" , JSON.stringify(this.todos));
      }

      addTodo(todo:Todo){
        console.log(todo);
        this.todos.push(todo);
        localStorage.setItem("todos" , JSON.stringify(this.todos));
      }
  
  localItem : string | null;
  todos! : Todo[];
  public constructor(){
    this.localItem = localStorage.getItem("todos");
    if(this.localItem == null){
      this.todos = []
    }else{
      this.todos = JSON.parse(this.localItem);
    }
  }

}
