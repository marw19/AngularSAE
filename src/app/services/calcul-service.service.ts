import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculServiceService {
   
  constructor() { }

  getNumberOf(list:any[], critiria:string, value:any){
    let nbr = 0;
    for(var i in list)
  {
    if(list[i][critiria]==value){
      nbr ++;
    }
  }
  return nbr ;
}
}
