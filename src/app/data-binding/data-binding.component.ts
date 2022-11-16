import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  Interpolation ="welcome Interpolation Binding"
  PropertyBinding : boolean = true;
  btnPropertyBinding = "btn btn-success"

  propertyTwoWayBinding = "salut"
  constructor() { }

  ngOnInit(): void {
  }


  methodeEventBinding(){
    alert("welcome Event Binding")
  }

  

  

}
