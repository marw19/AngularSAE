import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  prix !: number ;
  productList : Product[]=[
    {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
    {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
  {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0},
  ]
  constructor(private r: Router  ) { }
 
  ngOnInit(): void {
  }

  Like(id:number){
    for(let i=0;i<this.productList.length;i++)
    {
      if(this.productList[i].id==id)
        {
          this.productList[i].like++;
        }
    }
  }

  Buy(id:number)
  {
  for(let i=0;i<this.productList.length;i++)
  {
  if(this.productList[i].id==id)
  {
    this.productList[i].quantity--;
  }
  }
  }



  routage(){
    this.r.navigate(['articles']);
  }


  updateProduct(id:any){
this.r.navigate(['/editProduct',id])
  }
  addProduct(){
    this.r.navigate(['addProduct'])
  }

 
}

