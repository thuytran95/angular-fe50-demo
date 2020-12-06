import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}
  // next : sau khi chinh sua request  -> cam request gui len tren server
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const user = localStorage.getItem('user');

    if (user) {
      const { accessToken } = JSON.parse(user);
      // add Authorization vao request headers
      request = request.clone({
        headers: request.headers.append(
          'Authorization',
          `Bearer ${accessToken}`
        ),
      });
    }
    return next.handle(request);
  }
}
