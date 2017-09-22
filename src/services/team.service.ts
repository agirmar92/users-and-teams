import { Injectable } from '@angular/core';

import { UserService } from './user.service';
import { Team, TeamDetails} from '../models/team';

@Injectable()
export class TeamService {

  constructor(
    private userService: UserService
  ) { }

  getAllTeams() {
    return [
      { 'id': 1, 'name': 'Awesome Dancers' },
      { 'id': 2, 'name': 'Awesome Tricksters' },
      { 'id': 3, 'name': 'Invincible Jugglers' },
      { 'id': 4, 'name': 'Unbelivable Astronauts' },
      { 'id': 5, 'name': 'Unbelivable Heroes' }
    ];
  }

  getTeamById(teamId): TeamDetails {
    const team = { 'id': 1, 'lead': 30, 'name': 'Awesome Dancers', 'members': [25, 26, 27, 28, 29] };
    const teamLeader = this.userService.getUserById(team.lead);
    const teamMembers = team.members.map(userId => this.userService.getUserById(userId));

    return {
      id: team.id,
      lead: teamLeader,
      members: teamMembers,
      name: team.name
    };
  }

}
