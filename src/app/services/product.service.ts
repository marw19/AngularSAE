import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  /*
  list : Product[]=[
    {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
    {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
  {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0},
  ]
  */
  constructor(private http:HttpClient) { }
  url ="http://localhost:3000/product";
  getProducts():Observable<Product[]>{
    //return this.list
    return this.http.get<Product[]>(this.url);
  }
  getProductById(id:number){
    //return this.list
    return this.http.get<Product>(this.url+"/"+id);
  }

  addProduct(p:Product){
   // this.list.push(p)
    return this.http.post<Product>(this.url, p);
  }

  deleteProduct(id:Number){
    //delete from list
    return this.http.delete<Product>(this.url+"/"+ id);
  }
  updateProduct(id:number,p:Product): Observable<Product>{
    return this.http.put<Product>(this.url+"/"+id, p);
  }
}
