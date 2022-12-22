import { Component, OnInit } from '@angular/core';
import { todo } from '../model/todo';
import { CalculServiceService } from '../services/calcul-service.service';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todolist !:todo[]; 
  numberCalcul !: number;
  msg : String = '';
  constructor(private cs : CalculServiceService , private todoService : TodoService) { }

  ngOnInit(): void {
  //
    this.todoService.getTodos().subscribe(
      data  => {this.todolist = data;  console.log(data)},
      error => {alert("Impossible récupérer liste Todos") }
      );
      
     
    /*
    this.todolist=[ 
      {"userId": 1, "id": 1, "title": "delectus aut autem", "completed": false}, 
      {"userId": 1, "id": 2, "title": "quis ut nam facilis et officia qui", "completed": false}, 
      {"userId": 1, "id": 3, "title": "fugiat veniam minus", "completed": true}, 
      {"userId": 1, "id": 4, "title": "quo adipisci enim quam ut ab", "completed": true}];
    */
      
  }

  completedParRapportTotla(){
    this.numberCalcul = this.cs.getNumberOf(this.todolist, 'completed', true);
    this.msg = " le nombre de todo completed = "
    +this.numberCalcul +" par rapport au nombre de todo total = "
    +this.todolist.length
    +"   ("+this.numberCalcul+"/"+this.todolist.length+")"
  }
 

}
