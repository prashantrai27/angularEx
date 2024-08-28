import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FirstDummyInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request,'request in interceptors') // it'll be used in all the api calls
    let JWT_Token = 't3h35tgwf23r'
    const req = request.clone({
      setHeaders:{
        JWT_Token
      }
    })
    return next.handle(req);
  }
}
