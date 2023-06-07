import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Prodotto } from '../models/prodotto.interface';

@Injectable({
    providedIn: 'root',
})
export class ProdottiService {

    baseURL = environment.baseURL;

    constructor(private http:HttpClient) {}

    recupera() {
        return this.http.get<Prodotto[]>(`${this.baseURL}prodotti`);
    }
}
