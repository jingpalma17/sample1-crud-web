import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { UserService } from '../user.service';

@Component({
  selector: 'app-user-info-dialog',
  templateUrl: './user-info-dialog.component.html',
  styleUrls: ['./user-info-dialog.component.scss'],
})
export class UserInfoDialogComponent implements OnInit {
  form: FormGroup;
  title = 'User Info';
  action = 'Apply';

  constructor(
    private readonly userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    if (!data) {
      this.data = {};
    }
  }

  ngOnInit(): void {
    const { firstName, lastName, mobileNumber, address } = this.data;
    this.form = new FormGroup({
      firstName: new FormControl(firstName),
      lastName: new FormControl(lastName),
      mobileNumber: new FormControl(mobileNumber),
      address: new FormControl(address),
    });
  }

  save(user) {
    if (this.data.id) {
      user.id = this.data.id;
      this.update(user);
    } else {
      delete user.id;
      this.create(user);
    }
  }

  create(user) {
    this.userService.create(user).subscribe(() => {});
  }

  update(user) {
    this.userService.update(user).subscribe();
  }
}
