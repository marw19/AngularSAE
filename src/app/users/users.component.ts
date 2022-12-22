import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../model/Utilisateur ';
import { CalculServiceService } from '../services/calcul-service.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  listUsers !: Utilisateur[];
  usernameTappe !:any;
  constructor(private cs : CalculServiceService , private us : UserService) { }

  ngOnInit(): void {
    this.us.getUsers().subscribe(
      data => {this.listUsers = data},
      error => {alert("Impossible récupérer liste users") }
    );
    /*
    this.listUsers=[ 
      {id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz"}, 
      {id: 2, name: "Ervin Howell", username: "Bret", email: "Shanna@melissa.tv"}, 
      {id: 3, name: "Clementine Bauch", username: "Samantha", email: "Nathan@yesenia.net"} 
      ];
      */
  }

  nbrUtilisateurByUserName(username : String){
    let nb = 0;
   nb =  this.cs.getNumberOf(this.listUsers,'username',username)
    alert("le nombre d’utilisateurs ayant le username : "+username + "est égale à = "+nb)

  }



}
