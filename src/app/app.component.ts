import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';
import { TeamService } from '../services/team.service';

import { Team, TeamDetails } from '../models/team';
import { User, UserDetails } from '../models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private users: Array<User>;
  private teams: Array<Team>;

  private fetchingTeams = false;

  constructor(
    public userService: UserService,
    public teamService: TeamService
  ) { }

  ngOnInit(): void {
    this.fetchingTeams = true;
    this.teamService.getAllTeams().subscribe(
      teams => {
        this.teams = teams;
      }, error => {
        console.log(error);
      }, () => {
        this.fetchingTeams = false;
      }
    );
  }

}
