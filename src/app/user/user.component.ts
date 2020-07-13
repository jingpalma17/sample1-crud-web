import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { UserService } from './user.service';
import { UserInfoDialogComponent } from './user-info-dialog/user-info-dialog.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  users: any; // TODO add type
  displayedColumns = [
    'firstName',
    'lastName',
    'mobileNumber',
    'address',
    'actions',
  ];

  constructor(
    private readonly userService: UserService,
    private readonly dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.userService.get().subscribe((users) => (this.users = users));
  }

  addUser() {
    this.dialog
      .open(UserInfoDialogComponent, {
        width: '400px',
      })
      .afterClosed()
      .subscribe();
  }
}
