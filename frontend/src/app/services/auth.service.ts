import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router'
//http client global servis?
@Injectable()
export class AuthService {

constructor(private http:HttpClient,private router:Router) { }

path="http://localhost:3001/auth";
TOKEN_KEY="token"
registerUser(registerData){
    this.http.post<any>(this.path+"/register",registerData).subscribe(res=>{
        this.saveToken(res.token);
        this.router.navigate(['user']);
    })   
    
}

loginUser(loginData){
    this.http.post<any>(this.path+"/login",loginData).subscribe(res=>{
        this.saveToken(res.token);
        this.router.navigate(['user']);
    })   
}

saveToken(token){
    localStorage.setItem(this.TOKEN_KEY,token);
}

logOut(){
    localStorage.removeItem(this.TOKEN_KEY);
}

get isAuthenticated(){
    return !!localStorage.getItem(this.TOKEN_KEY);
}

get token(){
    return localStorage.getItem(this.TOKEN_KEY);
}
}

