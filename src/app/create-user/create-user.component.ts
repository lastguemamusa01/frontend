import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

/**
 * Create user component class that add user
 * @author Min Ku Nam
 * @version 1.0.0
 * created 2020/09/22
 */

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: User = new User();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  saveUser() {
    this.userService.createUser(this.user).subscribe( data => {
      console.log(data);
      this.redirectToUserList();
    },
    error => console.log(error));
  }

  redirectToUserList() {
    this.router.navigate(['/users']);
  }

  onSubmit() {
    console.log(this.user);
    this.saveUser();
  }

}
