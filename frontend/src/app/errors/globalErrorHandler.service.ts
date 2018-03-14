import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {

    handleError(error: any): void {
        var router=this.injector.get(Router);
        router.navigate(['login']);
    }
constructor(private injector:Injector) { }

}