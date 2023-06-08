import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { switchMap, take } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private srvAuth: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.srvAuth.users$.pipe(take(1), switchMap(user=> {
      if (!user) {
        return next.handle(request);
      };
      //clonare richiesta per headers
      const newRequest = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${user.accessToken}`)
      })

      return next.handle(newRequest);
    }))

    /* return next.handle(request); */
  }
}
