import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let user = JSON.parse(localStorage.getItem('user'));
    let token = "";

    if ((user === null || user === undefined) === false) {
      token = user.token;
    }

    request = request.clone({
      setHeaders: {
        'x-access-token': token
      }
    });    
    return next.handle(request);
  }
}
