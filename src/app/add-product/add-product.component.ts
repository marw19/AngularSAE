import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../model/Product';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product : Product = {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0};
  listP !: Product[];
  constructor(private r:Router, private ps : ProductService) { }

  ngOnInit(): void {
    this.ps.getProducts().subscribe(
      data  => {this.listP = data;},
      error => {alert("Impossible d'afficher les produits")}
    );
 
  }

  save(f:NgForm){
//console.log(f);
//console.log(f.controls['title'].value);
console.log(f.value);
f.value['id'] = this.listP.length +1 ;
this.ps.addProduct(this.product)
console.log(this.listP);

this.ps.addProduct(f.value).subscribe(
  data => {alert("produit ajouter ");this.r.navigate(['products'])},
  err => {alert("produit non ajouter")}
);
  }

}
