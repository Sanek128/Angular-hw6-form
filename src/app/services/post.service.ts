import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAllPosts(id: number): Observable<Post[]>{
    // return this.http.get <Post[]> ('https://jsonplaceholder.typicode.com/posts?userId=${id}');
    return this.http.get<Post[]>(`http://jsonplaceholder.typicode.com/posts?userId=${id}`);
  }
}

