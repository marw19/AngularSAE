import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, ParamMap } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  id !: number;
  constructor(private recp:ActivatedRoute ) { }

  ngOnInit(): void {
   // this.id = this.recp.snapshot.params['id'];
    // Methode 2
    this.recp.paramMap.subscribe(
      params => this.id= Number(params.get('id'))  
      );
  }


 

}
