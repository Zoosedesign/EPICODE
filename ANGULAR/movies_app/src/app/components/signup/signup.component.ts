import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private srvAuth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async signup(form: NgForm) {
    try {
      await this.srvAuth.registration(form.value).toPromise();
      this.router.navigate(['/login'])
    } catch (error) {
      alert('Utente già esistente!');
    }
  }

}
