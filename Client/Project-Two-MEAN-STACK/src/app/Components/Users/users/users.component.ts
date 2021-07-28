import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/Classes/User/user';
import { Service1Service } from 'src/app/Services/Service1/service1.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private http : HttpClient, private service : Service1Service) { }

  sub : Subscription = new Subscription();
  users : User[] = [];
  filteredUsers: User[] = [];

  ngOnInit(): void {
    this.http.get<User[]>("http://localhost:8000/api/Users").subscribe(data =>
    {
      this.users = data;
      this.filteredUsers = data;      
    })
  }

  search(text : String)
  {
    if(text == "")
    {
      this.filteredUsers = [...this.users]
    }
    else
    {
      this.filteredUsers = this.users.filter(x => x.Name.toLowerCase().includes(text.toLowerCase()))  
    }
    
  }

}
