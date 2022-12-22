import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
@Input()productItem !: Product;
@Input()prix!:Number;
  constructor() { }

  ngOnInit(): void {
  }

  Like(id:number){
  
  }

  Buy(id:number)
  {
  
  }
  updateProduct(id:number){}
  deleteProduct(id:number){}

}
