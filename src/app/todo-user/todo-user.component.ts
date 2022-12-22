import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { todo } from '../model/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-user',
  templateUrl: './todo-user.component.html',
  styleUrls: ['./todo-user.component.css']
})
export class TodoUserComponent implements OnInit {
  userId !: number;
  TodoList !: todo[];
  constructor(private recp:ActivatedRoute , private todoS : TodoService) { }

  ngOnInit(): void {
    // this.id = this.recp.snapshot.params['id'];
    // Methode 2
    this.recp.paramMap.subscribe(
      params => this.userId= Number(params.get('userId'))  
      );

      this.todoS.getTodosUser(this.userId).subscribe(
        data =>{this.TodoList = data},
        error =>{alert("impossible de récuperer liste todo de cette user")}
      );
    
  }

}
