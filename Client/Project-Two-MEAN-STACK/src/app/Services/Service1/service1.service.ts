import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/Classes/User/user';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor(private http : HttpClient) { }


  getUsers()
  {
    return this.http.get<User[]>("https://jsonplaceholder.typicode.com/users")
  }

  getUser(id : number)
  {
    return this.http.get<User>("https://jsonplaceholder.typicode.com/users/" + id)
  }

  getUserTasks(userId : number)
  {
    return this.http.get<any[]>("https://jsonplaceholder.typicode.com/todos?userId=" + userId)
  }

}
