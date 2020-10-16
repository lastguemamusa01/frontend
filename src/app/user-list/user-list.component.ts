import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

/**
 * User list component class that show the user list
 * @author Min Ku Nam
 * @version 1.0.0
 * created 2020/09/22
 */

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers() {
    this.userService.getUsersList().subscribe(data => {
      this.users = data;
    });
  }

  updateUser(id: number) {
    this.router.navigate(['update-user',id]);
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(data => {
      console.log(data);
      this.getUsers();
    });
  }

}
