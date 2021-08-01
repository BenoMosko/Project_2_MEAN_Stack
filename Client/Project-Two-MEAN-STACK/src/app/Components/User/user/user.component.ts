import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/Classes/User/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private http : HttpClient) { }

  @Input()
  user : User = new User();

  sub: Subscription = new Subscription();
  sub1: Subscription = new Subscription();
  tasksCompleted : Boolean = false;
  otherDataBoolean : Boolean = false;
  idClick : Boolean = false;
  addTodos: boolean = false;
  addPosts: boolean = false;

  ngOnInit(): void {
    this.user.Tasks.forEach((task) =>{
      if(task.Completed)
      {
        this.tasksCompleted = true;
      }
      else
      {
        this.tasksCompleted = false;
      }
    })
  }

  updateUser()
  {
    this.sub = this.http.put('http://localhost:8000/api/Users/' + this.user._id, this.user).subscribe((status) =>
      {
        alert(status);
        window.location.reload();
      });
  }

  deleteUser()
  {
    this.sub1 = this.http.delete('http://localhost:8000/api/Users/' + this.user._id).subscribe((status) =>
    {
      alert(status);
      window.location.reload();
    });
  }

  markCompleted(id: String) {  
    let taskId = this.user.Tasks.find(x => x._id == id);
    taskId.Completed = true.toString();
    this.updateUser();
  }

}
