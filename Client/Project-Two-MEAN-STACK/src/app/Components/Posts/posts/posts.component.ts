import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/Classes/User/user';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private http :HttpClient) { }

  @Input()
  userPost : User = new User();

  sub : Subscription = new Subscription();
  addPosts : Boolean = false;

  ngOnInit(): void {
  }

  updatePosts()
  {
    this.sub = this.http.put('http://localhost:8000/api/Users/' + this.userPost._id, this.userPost).subscribe((status) =>
    {
        alert(status);
        window.location.reload();
      });
  }

  update(title: String, newBody: String)
  {
    if(title != '' && newBody != '')
    {
      let obj = {Title: title, Body: newBody };
      this.userPost.Posts.push(obj);
      this.updatePosts();
    }
    else
    {
      alert("One or more fields are empty!")
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
