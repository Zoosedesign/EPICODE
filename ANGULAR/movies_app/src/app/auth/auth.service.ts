import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs';
import { Router } from '@angular/router';

export interface AuthData { // da spostare in un'interfaccia
  accessToken: string;
  user: {
    email: string;
    id: number;
    name: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper = new JwtHelperService();
  url = "http://localhost:4201";
  private authSubj = new BehaviorSubject<null|AuthData>(null);

  users$ = this.authSubj.asObservable();
  timeoutLogout: any;

  constructor(private http: HttpClient, private router: Router) {
    //mantieni utente
    this.restore();
   }

login(data: {email: string; password: string}) {
  return this.http.post<AuthData>(`${this.url}/login`, data).pipe(
    tap((data) => {
      console.log(data);
      this.authSubj.next(data);
      localStorage.setItem('user', JSON.stringify(data));
      this.autoLogout(data); // da fare autoLogout
    }), catchError(this.errors) // gestire gli errori
  );
}

registration(data: {name: string; email: string; password: string}) {
  return this.http.post(`${this.url}/signup`, data).pipe(
    catchError(this.errors) //gestire gli errori
  );
};

restore() { //mantenere utente in localstorage
  const userJ = localStorage.getItem('user');
  if(!userJ) {
    return
  };
  const userdata: AuthData = JSON.parse(userJ);
  if(this.jwtHelper.isTokenExpired(userdata.accessToken)) {
    return;
  };

  this.authSubj.next(userdata);
  this.autoLogout(userdata);
};

logout() { //rimuovi user
  this.authSubj.next(null);
  localStorage.removeItem('user');
  this.router.navigate(['/login']);
  if (this.timeoutLogout) {
    clearTimeout(this.timeoutLogout);
  };
};

autoLogout(data: AuthData) { // esci e rimuovi user a token expired
  const expiredDate = this.jwtHelper.getTokenExpirationDate(data.accessToken) as Date; //cast
  const exMs = expiredDate.getTime() - new Date().getTime();
  this.timeoutLogout = setTimeout( () => {
    this.logout();
  }, exMs);
};

//errori
private errors(errore: any) {
  switch (errore.error) {
    case 'Email already exists':
      return throwError('Email già utilizzata');
      break;
    default:
      return throwError('Qualcosa è andato storto, riprova!');
      break;
  };
};

}
