//Bizim ana modulümüz
//Modul içerisinde kullancağımız component tanımlarını burda yapıyrouz;
//import işlemi Tanımları;
//declaration kısmı kullanım özelliğini sağlar;
//http istekleri yapabilmemiz için htpp modulu eklememiz gerekiyor

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import {RouterModule} from "@angular/router"

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PostComponent } from './post/post.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http'
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { LoginGuardService } from './login/login-guard.service';
import { AuthInterceptorService } from './services/AuthInterceptor.service';
import { UserfilterPipe } from './user/userfilter.pipe';
import { GlobalErrorHandlerService } from './errors/globalErrorHandler.service';

const routes=[
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent },
  {path:'user',component:UserComponent,canActivate:[LoginGuardService]},
  {path:'post',component:PostComponent}

  // {path:'',component:PostComponent}
]

//creativetime
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegisterComponent,
    LoginComponent,
    PostComponent,
    UserfilterPipe
],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    UserService,
    LoginGuardService,
    { provide:HTTP_INTERCEPTORS,
     useClass:AuthInterceptorService,
     multi:true}
    //  {provide:ErrorHandler,useClass:GlobalErrorHandlerService}
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

//AuthService global seviyede (singlotan olarak register edilmek istenirse app.module'e ekliyoruz)
