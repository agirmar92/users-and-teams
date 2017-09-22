import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class UserService {

  readonly apiUrl = 'http://tempo-test.herokuapp.com/7d1d085e-dbee-4483-aa29-ca033ccae1e4/1/user/';

  constructor(private http: HttpClient) { }

  getAllUsers() {

    // const options = new RequestOptions({ headers: headers });
    // .map(res => (res.json()))
    // .do(res => console.log('RESULT: ', JSON.stringify(res)))

    // return this.http.get(this.apiUrl);

    return [{ 'id': 30, 'username': 'superghost', 'name': 'Emma Lisbon' }, { 'id': 29, 'username': 'evilman', 'name': 'Ava Ulaanbaatar' }, { 'id': 28, 'username': 'nastydog', 'name': 'Michael Episkopi' }, { 'id': 27, 'username': 'bigman', 'name': 'Sophia Ulaanbaatar' }, { 'id': 26, 'username': 'nastyhamster', 'name': 'Daniel Vaduz' }, { 'id': 25, 'username': 'evilhamster', 'name': 'Michael Yaren' }, { 'id': 24, 'username': 'tallcat', 'name': 'Daniel Zagreb' }, { 'id': 23, 'username': 'talldoctor', 'name': 'Alexander Ulaanbaatar' }, { 'id': 22, 'username': 'strangepanda', 'name': 'Mason Cario' }, { 'id': 21, 'username': 'niceghost', 'name': 'Mason Ouagadougou' }, { 'id': 20, 'username': 'tinygirl', 'name': 'James Zagreb' }, { 'id': 19, 'username': 'stupidboy', 'name': 'Olivia Islamabad' }, { 'id': 18, 'username': 'loudpilot', 'name': 'Ava Baku' }, { 'id': 17, 'username': 'niceman', 'name': 'Madison Baku' }, { 'id': 16, 'username': 'bigghost', 'name': 'Mason Saipan' }, { 'id': 15, 'username': 'goodpanda', 'name': 'Charlotte Amsterdan' }, { 'id': 14, 'username': 'stupidfish', 'name': 'Ethan Saipan' }, { 'id': 13, 'username': 'weirddog', 'name': 'James Islamabad' }, { 'id': 12, 'username': 'bigcat', 'name': 'Emily Wellington' }, { 'id': 11, 'username': 'nastypilot', 'name': 'Daniel Cario' }, { 'id': 10, 'username': 'quiethamster', 'name': 'Noah Wellington' }, { 'id': 9, 'username': 'quietboy', 'name': 'Charlotte Lisbon' }, { 'id': 8, 'username': 'stupidpilot', 'name': 'Liam Gustavia' }, { 'id': 7, 'username': 'bigdoctor', 'name': 'Abigail Juba' }, { 'id': 6, 'username': 'evilsanta', 'name': 'Emily Nassau' }, { 'id': 5, 'username': 'strangepilot', 'name': 'Isabella Rome' }, { 'id': 4, 'username': 'loudhamster', 'name': 'Mason Juba' }, { 'id': 3, 'username': 'nastyghost', 'name': 'Emily Kabul' }, { 'id': 2, 'username': 'strangeboy', 'name': 'Ethan Ulaanbaatar' }, { 'id': 1, 'username': 'superdog', 'name': 'Ava Nassau' }];
  }

  getUserById(userId) {
    return { 'id': 30, 'member_teams': [], 'name': 'Emma Lisbon', 'lead_teams': [1], 'username': 'superghost' };
  }

}
