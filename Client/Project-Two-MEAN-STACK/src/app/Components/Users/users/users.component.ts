import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/Classes/User/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private http : HttpClient) { }

  sub : Subscription = new Subscription();
  users : User[] = [];

  ngOnInit(): void {
    this.http.get<User[]>("http://localhost:8000/api/Users").subscribe(data =>
    {
      this.users = data;
    })
  }

}
