import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GloablInterceptor implements HttpInterceptor {

  constructor() {}
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const basedurl:string ='https://dummyjson.com/'
    const token=localStorage.getItem('token')
    const modifiedrequest=request.clone({
      url:basedurl + request.url,
      setHeaders:{
        Authorization:`Bearer ${token} `
      }
    })
    return next.handle(modifiedrequest);
  }
}
