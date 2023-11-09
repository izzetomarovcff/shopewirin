import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponse } from './auth-response.model';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  marketname:string = environment.marketName 
  isLoginMode: boolean = true;
  loading: boolean = false;
  error: string = "";

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  toogleMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  handleAuth(form: NgForm) {
    if(!form.valid) {
      return;
    }

    this.loading = true;
    
    const fullname = form.value.fullname // new
    const phone = form.value.phone  //new

    const email = form.value.email;
    const password = form.value.password;
    let authResponse: Observable<AuthResponse>;
    

    if(this.isLoginMode) {     
      authResponse = this.authService.login(email, password);
    } else {
      authResponse = this.authService.register(email, password);
      this.authService.saveDate({id: 0, fullname: fullname, phone: phone, email: email, password: password }).subscribe(data=>{
        console.log("ok")
      })
    }
    



    authResponse.subscribe({
      next: () => {
        this.loading = false;
        this.error = "";
        this.router.navigate(['/home']);
      },
      error: (err) => {
        this.loading = false;
        this.error = err;
      }
    });

  }


}
