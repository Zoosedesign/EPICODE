import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.interface';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm!: FormGroup;
  url = environment.endpointUrl

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    // Verifica se l'utente è già loggato
    const loggedInUser: string | null = sessionStorage.getItem('loggedInUser');
    if (loggedInUser) {
      this.router.navigate(['movie/popular']);
    }

    //campi form e validatori applicati
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }
  register(): void {
    this.http.post<User>(`${this.url}users`, this.registerForm.value)
    .subscribe(response => {
      alert('Registrazione avvenuta con successo');
      this.registerForm.reset();
      this.router.navigate(['login']);
    },error => {
      alert('errore nella registrazione dell\'utente');
    })
  }
}
