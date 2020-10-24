import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { User } from 'src/app/models/User';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  @Input()
  user: User;
  postsList: Post[];

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private userService:UserService,
              private postService: PostService
    ) { }
    
    posts(id: number): void { 
      console.log('id', id);
      this.router.navigate(['posts', id], {
        relativeTo: this.activatedRoute,
        state: {userId:id}
      })
      
      this.postService.getAllPosts(id).subscribe(value => {
        console.log(value, 'allposts');
        this.postsList = value;
      })
    }

    ngOnInit(): void {
    }
  }
  