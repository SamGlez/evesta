import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  error: string;
  user ={
  username:'',
  password:'',
  name: '',
  lastname: '',
  company: '',
  email: '',
  description: '',
};
  constructor(private session: SessionService, private router: Router) { }

  ngOnInit() {
  }

  signup() {
    console.log(this.user);
    this.session.signup(this.user)
      .subscribe(
        (user) => console.log(this.user),
        (err) => this.error = err
      );
    this.router.navigate(['/home']);
    console.log(`${this.user.username} is logged`)
  }

}
