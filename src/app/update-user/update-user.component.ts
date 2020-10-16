import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';

/**
 * Update user component class that update user info
 * @author Min Ku Nam
 * @version 1.0.0
 * created 2020/09/22
 */

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  id: number;
  user: User = new User();

  constructor(private userService: UserService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.userService.getUserById(this.id).subscribe(data => {
      this.user = data;
    }, error => console.log(error));
  }

  redirectToUserList() {
    this.router.navigate(['/users']);
  }

  onSubmit() {
    this.userService.updateUser(this.id, this.user).subscribe(data => {
      this.redirectToUserList();
    }, error => console.log(error));
  }

  backToList() {
    this.router.navigate(['users']);
  }

}
