import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent implements OnInit {

  @Input()
  postList: Post[];
    
  constructor() {}

  
  ngOnInit(): void {
  }

}
