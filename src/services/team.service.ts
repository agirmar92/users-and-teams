import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TeamService {

  readonly apiUrl = 'http://tempo-test.herokuapp.com/7d1d085e-dbee-4483-aa29-ca033ccae1e4/1/team/';

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Fetches all teams
   */
  getAllTeams(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  /**
   * Fetches a detailed object for the team with the given id
   * @param teamId
   */
  getTeamById(teamId): Observable<any> {
    return this.http.get(`${this.apiUrl}${teamId}`);
  }

}
