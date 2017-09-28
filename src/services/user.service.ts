import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UserService {

  readonly apiUrl = 'http://tempo-test.herokuapp.com/7d1d085e-dbee-4483-aa29-ca033ccae1e4/1/user/';

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Fetches all users
   */
  getAllUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  /**
   * Fetches a detailed object for the user with the given id
   * @param userId
   */
  getUserById(userId): Observable<any> {
    return this.http.get(`${this.apiUrl}${userId}`);
  }

}
