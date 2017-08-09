import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { SessionService} from '../../services/session.service'


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
User: any;
  constructor(private router: Router, private sessionService: SessionService) {

   }

   ngOnInit() {
     this.sessionService.isLoggedIn().subscribe( (User:any) =>{
       console.log(`Welcome again user ${User.username}`)
       this.User = User;
       console.log(this.User.username)
     });
     // this.user.getPrivateData().subscribe(res => console.log(res));
   }

}
