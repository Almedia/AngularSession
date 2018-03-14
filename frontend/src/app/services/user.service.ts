import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

path=environment.path;
users=[];
constructor(private http:HttpClient) {

 }

 getUsers(){
     this.http.get(this.path)
    this.http.get<any>(this.path+"/users").subscribe(res=>{
            this.users=res;
    });
}

postMessage(message){
    this.http.post(this.path+"/post",message).subscribe(res=>{

    });
}

}

