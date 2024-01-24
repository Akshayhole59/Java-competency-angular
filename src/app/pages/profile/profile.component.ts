import { Component, OnInit } from '@angular/core';
//import { LoginService } from '../../services/login.service';
//import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  user: any | null = null;
  constructor(){}
//private login:LoginService

  ngOnInit(): void {
   //this.user =  this.login.getUser();

   }


}
