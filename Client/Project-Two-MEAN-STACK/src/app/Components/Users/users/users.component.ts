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
  sub2 : Subscription = new Subscription();
  users : User[] = [];
  filteredUsers: User[] = [];
  isVisible: boolean = false;
  userData: User = new User();

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

  create()
  {
    this.sub2 = this.http.post("http://localhost:8000/api/Users", this.userData).subscribe(status =>
    {
      alert(status);
      window.location.reload();
    })
  }

  reload()
  {
    window.location.reload();
  }

}
