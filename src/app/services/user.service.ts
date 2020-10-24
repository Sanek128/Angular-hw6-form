import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }

  getOneUserFromId(id: number): Observable<User>{
    // return this.http.get <User> ('https://jsonplaceholder.typicode.com/users/${id}');
    return this.http.get<User>(`http://jsonplaceholder.typicode.com/users/${id}`);
  }
}
