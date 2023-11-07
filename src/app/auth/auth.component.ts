import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  marketname:string = environment.marketName
  isLoginMode:boolean = true
  constructor() { }

  ngOnInit(): void {
  }
  toogleMode(){
    this.isLoginMode = !this.isLoginMode
  }

}
