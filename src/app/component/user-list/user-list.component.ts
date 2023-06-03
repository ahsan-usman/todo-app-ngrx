import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { selectUsers } from 'src/app/ngrx-user/user.selectors';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users$?: Observable<User[]>;

  userList: any;

  constructor(private store: Store, private user: UserService) {}

  ngOnInit(): void {
    this.user.getUsers().subscribe((res) => {
      console.log(res);
      this.userList = res;
    });

    this.users$ = this.store.pipe(select(selectUsers));
    console.log(this.users$);
  }
}
