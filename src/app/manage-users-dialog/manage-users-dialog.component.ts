import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';

import { UserDetails } from '../../models/user';

@Component({
  selector: 'app-manage-users-dialog',
  templateUrl: './manage-users-dialog.component.html',
  styleUrls: ['./manage-users-dialog.component.css']
})
export class ManageUsersDialogComponent implements OnInit {

  public displayedColumns = ['name', 'username'];

  constructor(
    public dialogRef: MdDialogRef<ManageUsersDialogComponent>,
    @Inject(MD_DIALOG_DATA) public teamMembers: any
  ) { }

  ngOnInit() {
    console.log(this.dialogRef, this.teamMembers);
  }

}

export class TeamMembersDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<UserDetails[]> {
    return Observable.of()
  }

  disconnect() { }
}
