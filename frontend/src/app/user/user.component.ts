import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';


//selector tanımı html üzerinden Component'e erişim yapmmamızı sağlayan link oluyor;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    //js methodu yüklendigi event
  constructor(private userService:UserService) { }
  users: any =[];
  ngOnInit() {
    this.userService.getUsers();
  }

}
