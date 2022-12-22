import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from '../model/Utilisateur ';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlUsers ="http://localhost:3000/users";
  constructor(private http:HttpClient) { }

  getUsers():Observable<Utilisateur[]>{
    //return this.list
    return this.http.get<Utilisateur[]>(this.urlUsers);
  }

}
