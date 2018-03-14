import { Component, OnInit } from '@angular/core';
import { AuthService} from './services/auth.service';
//Angular içerisinde main app'e ihtiyac duyuyoruz

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit  {

  ngOnInit(): void {
  
  }
  constructor(private authService:AuthService) {
  }

  logOut(){
    alert("me");
    this.authService.logOut();    
 
  }

  title :string  = 'Facebook';
  visitor :string ="Bahadir"
}



