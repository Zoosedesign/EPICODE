import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Intervento di Auth Interceptor! ', request); // Arriva all'interceptor la richiesta così come parte dal service
    const newRequest = request.clone({ // L'interceptor crea una nuova richiesta che è la copia (clone) della richiesta originaria con l'aggiunta di elementi necessari all'intestazione (headers) per autorizzare la chiamata
        headers: request.headers.append('Auth', 'secretId').append('firma', 'xyz')
    });
    return next.handle(newRequest).pipe(tap(evento => { // Viene emessa la nuova richiesta e con il metodo tap si gestisce l'evento ricevendo la risposta (positiva o negativa) alla nuova richiesta
        console.log('Nuova richiesta: ', newRequest);
        console.log('Sono la risposta della chiamata da auth interceptor: ', evento);
    }));
  }
}
