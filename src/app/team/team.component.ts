import { Component, OnInit, Input } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { TeamService } from '../../services/team.service';
import { UserService } from '../../services/user.service';
import { Team, TeamDetails } from '../../models/team';
import { User, UserDetails } from '../../models/user';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  @Input() team: Team;

  private teamDetails: TeamDetails;

  constructor(
    private teamService: TeamService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.teamDetails = this.teamService.getTeamById(this.team.id);
  }

  openAddMembersDialog() {
    console.log('wat');
  }

}
