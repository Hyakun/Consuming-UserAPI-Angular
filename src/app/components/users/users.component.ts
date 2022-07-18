import { Component, OnInit } from '@angular/core';
import { UsersResponse } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  response:UsersResponse;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUsers(15).subscribe((results ) => this.response = results);
  }

}
