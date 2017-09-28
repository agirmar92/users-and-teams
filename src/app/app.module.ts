import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {
  MdButtonModule,
  MdProgressSpinnerModule,
  MdCardModule,
  MdExpansionModule,
  MdIconModule
} from '@angular/material';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';

import { UserService } from '../services/user.service';
import { TeamService } from '../services/team.service';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdProgressSpinnerModule,
    MdCardModule,
    MdExpansionModule,
    MdIconModule,
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
