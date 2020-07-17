import { NgModule } from '@angular/core';

import { UserInfoDialogComponent } from './user-info-dialog/user-info-dialog.component';
import { UserRoutingModule, routedComponents } from './user-routing.module';

// TODO: Moved to shared module
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../layout/material/material.module';

@NgModule({
  declarations: [...routedComponents, UserInfoDialogComponent],
  imports: [UserRoutingModule, MaterialModule, ReactiveFormsModule],
  exports: [],
  providers: [],
  entryComponents: [UserInfoDialogComponent],
})
export class UserModule {}
