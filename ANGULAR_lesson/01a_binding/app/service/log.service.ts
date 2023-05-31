import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LogService {
    constructor() {}
    logStatusChange(index: number, newStatus: string) {
        console.log(`Nuovo stato per l\'utente con id ${index}: ${newStatus}`);
    }
}
