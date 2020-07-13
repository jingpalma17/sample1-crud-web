import { NgModule } from '@angular/core';

import { UserInfoDialogComponent } from './user-info-dialog/user-info-dialog.component';
import { UserRoutingModule, routedComponents } from './user-routing.module';
import { MaterialModule } from '../layout/material/material.module';

@NgModule({
  declarations: [...routedComponents, UserInfoDialogComponent],
  imports: [UserRoutingModule, MaterialModule],
  exports: [],
  providers: [],
  entryComponents: [UserInfoDialogComponent],
})
export class UserModule {}
