import { Component } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
    FormArray,
} from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'Reactive';

    generi = ['uomo', 'donna'];
    contenitoreForm!: FormGroup;
    usernameProibiti = ['Mario', 'Anna'];

    constructor(private fb: FormBuilder) {}

    validUsername = (formC: FormControl) => {
        if (this.usernameProibiti.includes(formC.value)) {
            return { usernameProibito: true };
        } else {
            return null;
        }
    };

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.contenitoreForm = this.fb.group({
            userInfo: this.fb.group({
                username: this.fb.control(null, [Validators.required,this.validUsername,]),
                email: this.fb.control(null, [
                    Validators.required,
                    Validators.email,
                ]),
            }),
            genere: this.fb.control('donna'),
            sports: this.fb.array([]),
        });

        this.contenitoreForm.valueChanges.subscribe((value) => {
            console.log(value);
        });
    }

    getErrorsC(name: string, error: string) {
        return this.contenitoreForm.get(name)?.errors![error];
    }

    getFormC(name: string) {
        return this.contenitoreForm.get(name);
    }

    getSportsF() {
        return (this.contenitoreForm.get('sports') as FormArray).controls;
    }

    addSports() {
        const control = this.fb.control(null);
        (this.contenitoreForm.get('sports') as FormArray).push(control);
        console.log(this.getSportsF());
    }

    submitForm() {
        console.log(this.contenitoreForm);
        console.log('Form correttamente inviato');
        this.contenitoreForm.reset();
    }
}
