import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Subject, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponse } from './model/auth-response.model';
import { User } from './model/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api_key = environment.api_key;
  user = new BehaviorSubject<User|null>(null);

  constructor(private http: HttpClient, private router : Router) { }

  register(email: string, password: string) {

      return this.http.post<AuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + this.api_key, {
        email: email,
        password: password,
        returnSecureToken: true
      }).pipe(
        tap(response => {
          this.handleUser(response.email, response.localId, response.idToken, response.expiresIn);
        }),
        catchError(this.handleError)
      );
  }

  logout() {
    this.user.next(null);
    localStorage.removeItem("user");
    this.router.navigate([''])
  }

  login(email:string, password: string) {
    return this.http.post<AuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + this.api_key, {
        email: email,
        password: password,
        returnSecureToken: true
    }).pipe(
      tap(response => {
        this.handleUser(response.email, response.localId, response.idToken, response.expiresIn);
      }),
      catchError(this.handleError)
    );
  }

  autoLogin() {
    if(localStorage.getItem("user") == null) {
      return;
    }

    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const loadedUser = new User(user.email, user.id,user._token, new Date(user._tokenExpirationDate));
    let check = !!user
    if( check){
      this.router.navigate(['home'])
    }
    
    if(loadedUser.token) {
      this.user.next(loadedUser);
      
    }
  }

  private handleError(err: HttpErrorResponse) {
    let message = "Email Və Ya Şifrə Yalnışdır!";

    if(err.error.error) {
      switch(err.error.error.message) {
        case "EMAIL_EXISTS":
          message = "Bu E-mail Artıq İstifadə Olunub!"
          break;
        case "TOO_MANY_ATTEMPTS_TRY_LATER":
          message = "Bir Müddət Gözlə Və Yenidən Cəht Et"
          break;
        case "EMAIL_NOT_FOUND":
          message = "Yalnış Email";
          break;
        case "INVALID_PASSWORD":
          message ="Yalnış Şifrə";
          break;
      }
    }

    return throwError(() => message);
  }


  private handleUser(email: string, localId: string, idToken: string, expiresIn: string) {
    const expirationDate = new Date(new Date().getTime() + (+expiresIn * 1000))
        
    const user = new User(
      email,
      localId,
      idToken,
      expirationDate
    );

    this.user.next(user);

    localStorage.setItem("user", JSON.stringify(user));
  }
}
