import { Component, ViewChild } from '@angular/core'; // ViewChild è utilizzato per controllare lo stato del form (vedi sotto)
import { NgForm } from '@angular/forms'; // Utilizzato per gestire l'oggetto form

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'tdform';

    @ViewChild('contenitoreForm', {static: true}) contenitoreForm!: NgForm; // Con ViewChild static:true si recepisce il cambiamento dello stato del child indicato PRIMA dello stato afterViewInit, quindi anche se in fase di controllo il valore nel template cambia, il valore nel component rimane comunque allineato; con la classe NgForm gestiamo il form come un'unica istanza formGroup, quindi controlliamo i diversi valori nel form come elementi di un'unica istanza

    userForm = {
        defUserName: '',
        email: '',
        question: ''
    }

    generi = [
        {
            label: 'uomo',
            value: 'uomo'
        },
        {
            label: 'donna',
            value: 'donna'
        }
    ]

    risposta = '';

    user: any = {
        username: '',
        email: '',
        secret: '',
        risposta: '',
        sesso: ''
    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.contenitoreForm.statusChanges?.subscribe(stato => {
            console.log(this.contenitoreForm);
            console.log(`Stato del form: ${stato}`);
        });
    }

    generateUsername() {
        this.contenitoreForm.form.patchValue({
            userInfo: {
                email: 'pippo@pippo.com',
                username: 'pippo'
            }
        });
    }

    submitForm() {
        console.log(`Form inviato: ${this.contenitoreForm}`);
        this.user.username = this.contenitoreForm.value.userInfo.username;
        this.user.email = this.contenitoreForm.value.userInfo.email;
        this.user.secret = this.contenitoreForm.value.userInfo.secret;
        this.user.risposta = this.contenitoreForm.value.userInfo.risposta;
        this.user.sesso = this.contenitoreForm.value.userInfo.sesso;
        console.log(this.user);

        this.contenitoreForm.reset();
    }

}
