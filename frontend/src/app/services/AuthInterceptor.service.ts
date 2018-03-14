import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';
import { HttpRequest } from 'selenium-webdriver/http';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
    intercept(req, next) {
            var authService=this.injector.get(AuthService);
            //var token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1YWE3Y2NjYzNlOGMzMzEzODRhY2M3ODUifQ.ZFGVxS9bzfNrIoqc2eyCpJ8O764dfNjIj-LBrZMCIlQ";
            console.log(req);
          
            return next.handle(req.clone({
                setHeaders: {
                    'Authorization': 'token ' +authService.token
                }
            }));
    }
    constructor(private injector:Injector) { }

}