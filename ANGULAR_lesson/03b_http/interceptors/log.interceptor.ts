import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LogInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Richiesta dal log interceptor: ', request);
    return next.handle(request).pipe(tap(nuovaRichiesta=> {
        console.log('Risposta dal log interceptor: ', nuovaRichiesta);

    }));
  }
}
