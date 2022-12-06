import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { Product } from '../model/Product';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product : Product = {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0};
  constructor() { }

  ngOnInit(): void {
  }

  save(f:NgForm){
console.log(f);
console.log(f.controls['title'].value);
  }

}
