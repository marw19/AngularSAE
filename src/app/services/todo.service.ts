import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }
  urlTodos ="https://jsonplaceholder.typicode.com/todos";
  

  getTodos():Observable<todo[]>{
    //return this.list
    return this.http.get<todo[]>(this.urlTodos);
  }

  getTodosUser(userId:Number):Observable<todo[]>{
    //return this.list
    https://jsonplaceholder.typicode.com/todos?userId=1
    return this.http.get<todo[]>(this.urlTodos+"?userId="+userId);
  }



}
