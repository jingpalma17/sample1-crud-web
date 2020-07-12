import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [AppComponent, UserComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
  ],
  providers: [],
  exports: [LayoutModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
