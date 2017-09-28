import { Component, OnInit, Input } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

import { TeamService } from '../../services/team.service';
import { UserService } from '../../services/user.service';
import { Team, TeamDetails } from '../../models/team';
import { User, UserDetails } from '../../models/user';
import { ManageUsersDialogComponent } from '../manage-users-dialog/manage-users-dialog.component';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  @Input() team: Team;

  private teamDetails;

  private fetchingTeamMembers = false;

  constructor(
    private teamService: TeamService,
    private userService: UserService,
    private dialog: MdDialog
  ) { }

  ngOnInit() {
    this.fetchingTeamMembers = true;

    this.teamService.getTeamById(this.team.id)
      .map(teamDetails => {
        this.userService.getUserById(teamDetails.lead).subscribe(
          leaderDetails => teamDetails.lead = leaderDetails
        );
        return teamDetails;
      })
      .subscribe(teamDetails => {
        Observable.of(teamDetails.members)
          .flatMap(memberIds => Observable.forkJoin(memberIds.map(memberId => this.userService.getUserById(memberId))))
          .subscribe(
            memberDetails => {
              teamDetails.members = memberDetails;
              this.teamDetails = teamDetails;
              this.fetchingTeamMembers = false;
            }
          );
      });
  }

  removeUser(user) {
    const indexOfUser = this.teamDetails.members.indexOf(user);
    this.teamDetails.members.splice(indexOfUser, 1);
  }

  openAddMembersDialog() {
    const dialogRef = this.dialog.open(ManageUsersDialogComponent, {
      data: this.teamDetails.members
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
