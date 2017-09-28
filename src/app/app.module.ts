import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {
  MdButtonModule,
  MdProgressSpinnerModule,
  MdCardModule,
  MdExpansionModule,
  MdIconModule,
  MdDialogModule,
  MdTableModule
} from '@angular/material';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';

import { UserService } from '../services/user.service';
import { TeamService } from '../services/team.service';
import { ManageUsersDialogComponent } from './manage-users-dialog/manage-users-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    ManageUsersDialogComponent
  ],
  entryComponents: [
    ManageUsersDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdProgressSpinnerModule,
    MdCardModule,
    MdExpansionModule,
    MdIconModule,
    MdDialogModule,
    MdTableModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [
    UserService,
    TeamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
