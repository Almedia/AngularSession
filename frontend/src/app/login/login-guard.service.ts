import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
//Angular js üzerinde sayfa acılmadan önce ya da işlemler yapılmadan önce kontroller koymak istediğimizde guard'i kullanıyoruz
@Injectable()
export class LoginGuardService  implements CanActivate{

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> {
       //activatedRouteSnapshot:Acılmaya calısan sayfaya karsılık gelir
       //RouterStateSnapshot ise mevcut ekran bilgisini tutar
       if(this.authService.isAuthenticated)
            return true;
       else{
            this.router.navigate(["login"],{queryParams:{returnUrl:state.url}})
            return false;
       }
    }
constructor(private authService:AuthService,private router:Router) { }

}