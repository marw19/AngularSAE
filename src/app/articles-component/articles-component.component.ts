import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';

@Component({
  selector: 'app-articles-component',
  templateUrl: './articles-component.component.html',
  styleUrls: ['./articles-component.component.css']
})
export class ArticlesComponentComponent implements OnInit {
  listeArticle: Article[]=[
    {  titre: "Le chompion du monde", contenu:"Le chompion du monde du cette année est ", auteur:"Med Taher", date:"12/12/2005", categorie:"Sport"},
    {  titre: "Les nouveaux parents", contenu:"Les nouveaux parents", auteur:"Ahmed Said", date:"11/11/2008", categorie:"Education"},
    {  titre: "Comment ecrire votre cv ", contenu:"Pour réussir a déraucher un emploi", auteur:"Marie Elsa", date:"01/04/2017", categorie:"Travail"}
    
  ]
  nombre = 0;
   
  NombreArticle(){
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
