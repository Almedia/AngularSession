import { Component, OnInit } from '@angular/core';
import { AuthService} from '../services/auth.service';
//servisleri component bazında register etmek istersek providers'a eklememiz gerekiyor
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[]
})
export class RegisterComponent implements OnInit {

  constructor(private authService:AuthService) {
   }

  registerData={

  }

  ngOnInit() {
  }

  post(){
    this.authService.registerUser(this.registerData);    
  }
}
