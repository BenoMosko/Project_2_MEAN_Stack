import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/Classes/User/user';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private http : HttpClient) { }

  @Input()
  userTask: User = new User();

  sub : Subscription = new Subscription();

  ngOnInit(): void {
  }

  updateTask() {
    this.sub = this.http.put('http://localhost:8000/api/Users/' + this.userTask._id, this.userTask).subscribe((status) =>
    {
        alert(status);
        window.location.reload();
      });
  }

  update(titleNew : String)
  {
    if(titleNew != "")
    {
      let obj = {Title : titleNew, Completed : false };
      this.userTask.Tasks.push(obj);
      this.updateTask();
    }
    else
    {
      alert("The field id empty!")
    }
  }

  reload()
  {
    window.location.reload();
  }

  ngOnDestroy()
  {
    this.sub.unsubscribe();
  }

}
