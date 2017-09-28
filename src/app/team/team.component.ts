import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

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

  private teamDetails;

  private fetchingTeamMembers = false;

  constructor(
    private teamService: TeamService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.fetchingTeamMembers = true;

    // Fetch team details
    this.teamService.getTeamById(this.team.id)
      .map(teamDetails => {
        // Map the leader id to a user details object
        this.userService.getUserById(teamDetails.lead).subscribe(
          leaderDetails => teamDetails.lead = leaderDetails
        );
        return teamDetails;
      })
      .subscribe(teamDetails => {
        // Map all team members to user details objects
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

  /**
   * Removes the given user from the team
   * @param user
   */
  removeUser(user) {
    // Below is a code snippet I would use if the team service had this feature implemented.
    /* this.teamService.removeMember(memberId).subscribe(
      updatedTeamDetails => this.teamDetails = updatedTeamDetails
    ); */

    const indexOfUser = this.teamDetails.members.indexOf(user);
    this.teamDetails.members.splice(indexOfUser, 1);
  }

}
