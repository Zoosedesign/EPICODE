import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Prodotto } from 'src/app/models/prodotto.interface';
import { ProdottiService } from 'src/app/service/prodotti.service';

@Component({
    selector: 'app-prodotti',
    templateUrl: './prodotti.component.html',
    styleUrls: ['./prodotti.component.scss'],
})
export class ProdottiComponent implements OnInit {

    sub!: Subscription;
    prodotti: Prodotto[] | undefined;

    constructor(private prodottiSrv: ProdottiService) {}

    ngOnInit(): void {
        this.prodotti = this.recuperaProdotti();
    }

    recuperaProdotti(): any {
        this.sub = this.prodottiSrv.recupera().subscribe((prodotti: Prodotto[]) => {
            this.prodotti = prodotti;
        });
    }
}
