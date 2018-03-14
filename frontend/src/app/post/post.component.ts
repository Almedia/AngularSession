import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private userService:UserService) { }
  errorMessage="";
  ngOnInit() {
  }
  postMsg;

  PostMessage(){
    try{
      this.userService.postMessage({ postMsg:this.postMsg });
    }
    catch(ex){
        this.errorMessage="hatali islem dude!!"
    }
      
  }

}
