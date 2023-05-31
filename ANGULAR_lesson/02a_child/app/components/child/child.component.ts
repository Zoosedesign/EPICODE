// I lifecycle sono impliciti in un component e vengono eseguiti sempre; li importiamo quando vogliamo che in conseguenza di un lifecycle debba accadere qualcosa (vedi es. su ngAfterContentChecked)

import { Component, OnInit, Input, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    @Input() nomeInviato!: string;

    constructor() {
        console.log(`Costruttore attivato; nome: ${this.nomeInviato}`);
    }

    // Utilizzato sempre, anche se non in prima battura, per consentire l'operatività al caricamento del component dopo l'esecuzione del costruttore
    ngOnInit(): void {
        console.log(`ngOnInit attivato; nome: ${this.nomeInviato}`);
    }

    // ngOnChanges(changes: SimpleChanges): void {
    //     //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //     //Add '${implements OnChanges}' to the class.
    //     console.log(`ngOnChanges attivato, cambiamenti: ${changes}`);
    // }

    ngDoCheck(): void {
        //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
        //Add 'implements DoCheck' to the class.
        console.log('ngDoCheck attivato');
    }

    ngAfterContentInit(): void {
        console.log('ngAfterContentInit attivato');
    }

    ngAfterContentChecked(): void {
        console.log(`ngAfterContentChecked attivato: nome originario: ${this.nomeInviato}`);
        if (this.nomeInviato == '') {
            this.nomeInviato = 'Antonio';
        }
        // this.nomeInviato = 'Antonio';
        // console.log(`nome modificato: ${this.nomeInviato}`);
    }

    ngAfterViewInit(): void {
        console.log('ngAfterViewInit attivato');
    }

    ngAfterViewChecked(): void {
        console.log('ngAfterViewChecked attivato');
    }

    // Utilizzato quando il component, prima di essere scaricato, deve effettuare qualche operazione, ad es. desottoscrivere un observable o mandare il valore did una variabile a qualcuno
    ngOnDestroy(): void {
        console.log('ngOnDestroy attivato');
    }
}
