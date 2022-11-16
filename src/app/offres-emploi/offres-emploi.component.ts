import { Component, OnInit } from '@angular/core';
import { Emploi } from '../model/emploi';

@Component({
  selector: 'app-offres-emploi',
  templateUrl: './offres-emploi.component.html',
  styleUrls: ['./offres-emploi.component.css']
})
export class OffresEmploiComponent implements OnInit {
   nbr = 0;
   valueSearch : any ='chercher' ;
   entrepriseRechercher :string = '';
   OffreRecherche ="";

  
  constructor() { }
  listeEmploi : Emploi[]=[
    {reference:"ADS9",titre:"DEVELOPPEUR",entreprise:"HLI", etat:true},
    {reference:"CSD4",titre:"BI",entreprise:"VERMEG", etat:true},
    {reference:"BGT5",titre:"DESIGN",entreprise:"SOFRECOM", etat:false},
    {reference:"SDFS3",titre:"ANALYST",entreprise:"FOCUS", etat:true},
  ]
  ngOnInit(): void {
  }

  isDisabled(etat:any){
    
    if(etat == false){
      return true
    }
   
    return false;
  }

  Calculer(){
    
    for(let e of this.listeEmploi){
      if(e.etat == true){
        this.nbr ++;
      }
    }
    alert("calculer le nombre des offres d’emploi non clôturées =  "+this.nbr);
  }

   recherche(){
    console.log(this.entrepriseRechercher)
    for(let e of this.listeEmploi){
      if(e.entreprise == this.entrepriseRechercher){
      
        this.OffreRecherche = " reference "+e.reference+" entreprise "+e.entreprise+" etat "+e.etat+" titre "+e.titre
      }
    
    }
  
    
  }

  

}
