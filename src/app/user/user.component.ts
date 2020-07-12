import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  users: any; // TODO add type

  constructor(private readonly userService: UserService) {}

  ngOnInit(): void {
    this.userService.get().subscribe((users) => (this.users = users));
  }
}
