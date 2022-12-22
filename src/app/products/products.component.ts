import { Component, ErrorHandler, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  prix !: number ;
  productList !: Product[];
  /*
  productList : Product[]=[
    {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
    {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
  {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0},
  ]
  */
  constructor(private r: Router , private ps : ProductService  ) { }
 
  ngOnInit(): void {
//  this.productList = this.productServ.list;
this.ps.getProducts().subscribe(
  data  => {this.productList = data;},
  error => {alert("Impossible d'afficher les produits") 
  
}
);
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

  deleteProduct(id:Number){
    this.ps.deleteProduct(id).subscribe(
      () => window.location.reload()
      
    );
  }


 
}

