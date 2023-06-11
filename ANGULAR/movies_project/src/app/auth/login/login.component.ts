import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.interface';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
// per usarlo fare "npm install bcryptjs" e "npm i --save-dev @types/bcryptjs"
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  url = environment.endpointUrl

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    // Verifica se l'utente è già loggato
    const loggedInUser: string | null = sessionStorage.getItem('loggedInUser');
    if (loggedInUser) {
      this.router.navigate(['movie/popular']);
    }

    //campi form e validatori applicati
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  login(): void {
    this.http.get<any>(`${this.url}users`)
      .subscribe(
        response => {
          //confronto i dati inseriti nel form con quelli nel server
          const user = response.find((data: User) => {
            const isPasswordMatch = bcrypt.compareSync(this.loginForm.value.password, data.password);
            return data.email.toLowerCase() === this.loginForm.value.email.toLowerCase() && isPasswordMatch;
          });
          if (user) {
            // Salva i dati di login nel sessionStorage
            sessionStorage.setItem('loggedInUser', JSON.stringify(user));
            this.loginForm.reset();
            this.router.navigate(['movie/popular']);
          } else {
            alert('Email o password errate');
          }
        },
        error => {
          console.log('Errore durante la chiamata HTTP:', error);
          alert('Si è verificato un errore durante la chiamata HTTP. Controlla la console per ulteriori dettagli.');
        }
      );
  }


}
