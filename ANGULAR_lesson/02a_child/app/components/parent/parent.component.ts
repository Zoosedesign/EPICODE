import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {

    nome = 'Marco';
    active = false;

    constructor() {
        console.log(`Costruttore attivato, nome: ${this.nome}`);
    }

    ngOnInit(): void {}
}
