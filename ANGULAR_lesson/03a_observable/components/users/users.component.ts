import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs'; // Importazione delle classi Observable e Subscription, per impostare l'elemento che sarà osservato (Observable) e consentire a chi lo osserverà (Observer) di sottoscriverlo
import { map } from 'rxjs/operators'; // L'operatore map consentirà di modificare il valore dell'Observable ad ogni nuovo valore che riceverà

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {

    observer!: Subscription; // Variabile per sottoscrivere l'Observable
    conteggio: number = 0; // Valore che sarà intercettato dall'observable

    constructor() {}

    ngOnInit(): void {
        const observable = new Observable(osservatore => { // Observable che riceve come parametro chi lo osserverà (nel nostro caso sarà this.observer)
            let conta = 0;
            setInterval(() => {
                osservatore.next(conta); // Next: metodo che consente all'Observable di ricevere la notifica del cambio di valore
                if (conta === 5) {
                    osservatore.complete(); // Condizione per il completamento dell'Observer
                    console.log('Observer completato');
                }
                if (conta > 6) {
                    osservatore.error(new Error('Conta è troppo grande')); // Condizione per bloccare l'Observer
                }
                conta++;
            }, 1000);
        });

        this.observer = observable.pipe(map((contaMomnentaneo) => { // Il metodo pipe INFILA la subscription dell'observable in un flusso, che in questo caso è gestito con l'operatore map, che genera il nuovo valore modificando il valore precedente
            this.conteggio = Number(contaMomnentaneo);
            return `Siamo al numero ${contaMomnentaneo}`;
        })).subscribe(numero => { // Sottoscrizione dell'observable, con il parametro numero che riceve il valore di conta di riga 21
            console.log(numero);
        },(error) => {
            console.log(error);
            alert(error);
        }, () => {
            console.log('Observable completato');
        });
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.observer.unsubscribe(); // Scaricamento dell'observable, SEMPRE a ngOnDestroy
        console.log('Observable scaricato');
    }
}
