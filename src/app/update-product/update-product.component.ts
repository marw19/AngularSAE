import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, ParamMap, Router } from '@angular/router';
import { map } from 'rxjs';
import { Product } from '../model/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  id !: number;
  product !: Product;
  constructor(private recp:ActivatedRoute , private ps:ProductService  , private r : Router) { }

  ngOnInit(): void {
   // this.id = this.recp.snapshot.params['id'];
    // Methode 2
    this.recp.paramMap.subscribe(
      params => this.id= Number(params.get('id'))  
      );
      this.ps.getProductById(this.id).subscribe(
        p => this.product = p
      )
  }

  


  updateProduct(f:NgForm){
      this.ps.updateProduct(this.id,this.product).subscribe(
        () => this.r.navigate(['products'])
      );
     
  }

}
